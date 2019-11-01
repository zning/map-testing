import React from "react";
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import {GoogleMapProvider,MapBox} from '@googlemap-react/core';

const API = "AIzaSyDRE9AUUkFLsYxndhuT1yXYE_bX_NR4syE";


// Example for '@react-google-maps/api' package
export function Map1() {
  return (
    <LoadScript
      id="script-loader"
      googleMapsApiKey= {API}
    >
      <GoogleMap
        id="example-map1"
        mapContainerStyle={{
          height: "100%",
          width: "100%"
        }}
        zoom={4}
        center={{
          lat: 39.5,
          lng: -98.35
        }}
      />
    </LoadScript>
  );
}


// Example for '@googlemap-react/core' package
export function Map2(){
  return (
  <GoogleMapProvider>
    <MapBox
      apiKey={API}
      opts={{
        center: {lat: 39.5, lng: -98.35},
        zoom: 5,
      }}
      style={{
        height: '100%',
        width: '100%',
      }}
    />
  </GoogleMapProvider>
)
}

export default function Default(){
  return <h1>Default EXPORT</h1>
}
