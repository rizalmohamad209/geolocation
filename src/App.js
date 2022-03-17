import React, { Component } from 'react';

import './App.css';






class App extends Component {

  handlePermission = () => {
    navigator.permissions.query({
      name: 'geolocation'
    }).then(function (permissionStatus) {

      alert('geolocation permission status is ', permissionStatus.state);

      permissionStatus.onchange = function () {
        alert('geolocation permission status has changed to ', this.state);
      };
    });
  }
  show_position = (position) => {
    console.log(position);
    return position.coords.latitude;
  };

  handle_my_location = () => {
    if (!this.state.active) {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.show_position);
      } else {
        console.log("unavailable");
      }
    } else {
      navigator.permissions.revoke({ name: 'geolocation' });

    }
  };
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.getLocation();
  }


  getLocation() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(value => {
        this.setState({
          longitude: value.coords.longitude,
          latitude: value.coords.latitude
        });
        this.showInMap(value);
      }, this.errorHandling, options);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }




  errorHandling(error) {
    if (error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          console.log("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.log("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.log("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.log("An unknown error occurred.");
          break;
        default:
          console.warn('ERROR(' + error.code + '): ' + error.message);
          break;
      }
    }
  };

  render() {
    return (
      <div>

        <button onClick={this.handlePermission}>
          click saya
        </button>
        <h2>on lat {this.state.latitude}.</h2>
        <h2>on long {this.state.longitude}.</h2>
      </div>

    );
  }
}

export default App;