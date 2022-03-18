
import React,{useEffect,useState} from 'react'
import mapboxgl from 'mapbox-gl';
import Map,{Marker} from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import Pin from './Pin';
// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
// Map.workerClass = require('worker-loader-mapbox-gl/dist/mapbox-gl-csp-worker').default;

mapboxgl.accessToken = "pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw"



// let accessToken=  "pk.eyJ1Ijoicml6YWxtb2hhbWFkIiwiYSI6ImNsMHc3bTZkYjA1OWozbHNkODdtMTAybmMifQ.yf_r7qnBH4hjNV5pXtQHUw";
 

const Geolocation = () => {

    const initialViewState = {
latitude: -3.0285603291926435,
    longitude: 117.06949693115286,
  zoom: 4
};

  const [marker, setMarker] = useState({
    latitude: 40,
    longitude: -100
  });

  


   

  const errorHandling =(error)=> {
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
  }

 

 console.log(marker);
//   const mapRef = React.useRef();
//   const handleViewportChange = React.useCallback(
//     (newViewport) => setViewPort(newViewport),
//     []
//   );

  useEffect(()=>{
   const  getLocation=()=> {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(value => {
        setMarker({
          longitude: value.coords.longitude,
          latitude: value.coords.latitude
        });
       
      }, errorHandling, options);
    } else {
      console.log("Geo Location not supported by browser");
    }
  }

  getLocation()
  },[])


//   const handleGeocoderViewportChange = React.useCallback(
//     (newViewport) => {
//       const geocoderDefaultOverrides = { transitionDuration: 1000 };

//       return handleViewportChange({
//         ...newViewport,
//         ...geocoderDefaultOverrides,
//       });
//     },
//     [handleViewportChange]
//   );

  
  return (
    <div className='mt-14'>
    <h1>Latitude : {marker.latitude}</h1>
    <h1>Laongitude : {marker.longitude}</h1>
   <Map
      initialViewState={initialViewState}
      style={{width: "w-auto", height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    >
    
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
        
        >
          <Pin size={20} />
        </Marker>
    </Map>
     
      </div>
  )
}

export default Geolocation