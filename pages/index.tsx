import { useState, useCallback } from 'react';
import type { NextPage } from 'next'
import { GoogleMap, useJsApiLoader, Data } from '@react-google-maps/api';


const containerStyle = {
  width: '100vw',
  height: '100vh'
};

const center = {
  lat: -34.726,
  lng:-58.790
};

const onClick = (...args: google.maps.MapMouseEvent[]) : void => {
  if(args[0] != null) console.log('onClick args: ', args)//args[0].latLng.lat(), ' : ', args[0].latLng.lng())
}

const onDataLoad = (data:unknown) => {
  console.log('data: ', data)
}


const dataOptions = {
  controlPosition: 2,
  
  drawingMode: 'Point', //  "LineString" or "Polygon".

  // Type:  boolean
  // If true, the marker receives mouse and touch events. Default value is true.
  clickable: true,

  // Type:  string
  // Mouse cursor to show on hover. Only applies to point geometries.
  // cursor: 'cursor',

  // Type:  boolean
  // If true, the object can be dragged across the map and the underlying feature will have its geometry updated. Default value is false.
  draggable: true,

  // Type:  boolean
  // If true, the object can be edited by dragging control points and the underlying feature will have its geometry updated. Only applies to LineString and Polygon geometries. Default value is false.
  editable: true,

  // Type:  string
  // The fill color. All CSS3 colors are supported except for extended named colors. Only applies to polygon geometries.
  fillColor: '#FFFFF',

  // Type:  number
  // The fill opacity between 0.0 and 1.0. Only applies to polygon geometries.
  fillOpacity: 0,

  // Type:  string|Icon|Symbol
  // Icon for the foreground. If a string is provided, it is treated as though it were an Icon with the string as url. Only applies to point geometries.
  // icon: 'icon',

  // Type:  MarkerShape
  // Defines the image map used for hit detection. Only applies to point geometries.
  // shape: 'shape',

  // Type:  string
  // The stroke color. All CSS3 colors are supported except for extended named colors. Only applies to line and polygon geometries.
  strokeColor: '#FFFF00',

  // Type:  number
  // The stroke opacity between 0.0 and 1.0. Only applies to line and polygon geometries.
  strokeOpacity: 1,

  // Type:  number
  // The stroke width in pixels. Only applies to line and polygon geometries.
  strokeWeight: 2,

  // Type:  string
  // Rollover text. Only applies to point geometries.
  title: 'Title',

  // Type:  boolean
  // Whether the feature is visible. Defaults to true.
  visible: true,

  // Type:  number
  // All features are displayed on the map in order of their zIndex, with higher values displaying in front of features with lower values. Markers are always displayed in front of line-strings and polygons.
  zIndex: 2,
}

const Home: NextPage = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDOyZbvMoQ8zpmLfEEnz96MHQeNwXjvpyw"
  })



  const onLoad = useCallback(
    (mapInstance)=> {
      // do something with map Instance
      mapInstance.data.loadGeoJson('/departamentos-buenos_aires.geojson')
      console.log(mapInstance)
    },[]
  )


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      onLoad={onLoad}
      onClick={onClick}
      
    >
<Data
          onLoad={onDataLoad}
          //options={dataOptions}
        />
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}

export default Home
