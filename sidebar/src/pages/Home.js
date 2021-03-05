import React from 'react'
import {useState} from 'react';
import MapGL from 'react-map-gl';
import './Home.css'
import AL_STATE_20 from '../GeoJSON/states/AL_STATE_20.js';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWZveWRsIiwiYSI6ImNrbGNqdnNocDBpZ2Qyd214bDZ2Y2piMDgifQ.nxwFI-kYDMC7ag_O8PgNhg';

function Home() {

  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });

  console.log(AL_STATE_20);
  return (
    <div className='home'>
      
        <MapGL
          {...viewport}
          width="100vw"
          height="94vh"
          mapStyle="mapbox://styles/mapbox/dark-v9"
          onViewportChange={setViewport}
          mapboxApiAccessToken={MAPBOX_TOKEN}
        />
      
    </div>
  )
}

export default Home
