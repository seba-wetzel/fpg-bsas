import { useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader, Data } from '@react-google-maps/api';
import { colores } from '../utils/seccionesElectorales';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: -36.726,
  lng:-60.000
};

const onClick = (...args) => {
  if(args[0] != null) console.log('onClick args: ', args)//args[0].latLng.lat(), ' : ', args[0].latLng.lng())
}

const onDataLoad = (data) => {
  console.log('data: ', data)
}


const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDOyZbvMoQ8zpmLfEEnz96MHQeNwXjvpyw"
  })



  const onLoad = useCallback(
    (mapInstance)=> {
      // do something with map Instance
      mapInstance.data.loadGeoJson('/mapa-con-secciones-electorales.geojson');
      // mapInstance.data.setStyle({
      //   fillColor: 'green',
      //   strokeWeight: 3
      // })
      mapInstance.data.setStyle(feature=>{
console.log(feature.h)
return      {  fillColor: colores[feature.h.seccion_electoral],
  strokeWeight: 2
 }

      });
      mapInstance.data.addListener('click', function(event) {
        console.log(event.feature)
        mapInstance.data.overrideStyle(event.feature, {fillColor: 'red'});
     });
      console.log("ONLOAD: ", mapInstance.data)
    },[]
  )


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onLoad={onLoad}
      onClick={onClick}
      
    >
<Data
          onLoad={onDataLoad}
        />
      { /* Child components, such as markers, info windows, etc. */ }
      <></>
    </GoogleMap>
) : <></>
}

export default Maps
