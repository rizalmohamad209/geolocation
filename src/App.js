import React, { Component } from 'react';

import './App.css';






class App extends Component {

  state = {

    // Initially, no file is selected
    selectedFile: null
  };

  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });

  };

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

  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>

          <p>File Name: {this.state.selectedFile.name}</p>


          <p>File Type: {this.state.selectedFile.type}</p>


          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
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

        <div>
          <h1>
            GeeksforGeeks
          </h1>
          <h3>
            File Upload using React!
          </h3>
          <div>
            <input type="file" onChange={this.onFileChange} />
            <button onClick={this.onFileUpload}>
              Upload!
            </button>
          </div>
          {this.fileData()}
        </div>
      </div>

    );
  }
}

export default App;