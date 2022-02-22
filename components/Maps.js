import { useState, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import { GoogleMap, useJsApiLoader, Data, Marker } from '@react-google-maps/api'
import { colores } from '../utils/seccionesElectorales.js'
import {centros} from '../utils/centros'
const containerStyle = {
  width: '100%',
  height: '100%'
}

const center = {
  lat: -34.70380057843663,
  lng: -58.73028612730095
}

const onClick = (...args) => {
  if (args[0] != null) console.log('onClick args: ', args)// args[0].latLng.lat(), ' : ', args[0].latLng.lng())
}

const onDataLoad = (data, map) => {
  //console.log('data: ', data, map)
}

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDOyZbvMoQ8zpmLfEEnz96MHQeNwXjvpyw'
  })
  const [marks, setMarks] = useState([])
  const router = useRouter()
  const onLoad = useCallback(
    (mapInstance) => {
      // do something with map Instance
      mapInstance.data.loadGeoJson('/mapa-con-secciones-electorales.geojson')
    
      mapInstance.data.setStyle(feature => ({
        fillColor: colores[feature.getProperty('seccion_electoral')],
        strokeWeight: 2,
        fillOpacity: 0.7,
        title: feature.getProperty('departamento')
      }))
      mapInstance.data.addListener('click', function (event) {
        //const seccion_electoral = event.feature.getProperty('seccion_electoral');
        const distrito = event.feature.getProperty('departamento')
        if (distrito) router.push(`/distrito/${distrito}`)
        console.log({distrito, latLng:event.latLng.toJSON()})
      })

    


    }, []
  )
  const onLoadMaker = marker => {     
    
    console.log('marker: ', marker)
  }

  useEffect(()=>{
    console.log(centros.length)
    if(isLoaded){
      window.google.maps.Polygon.prototype.my_getBounds=function(){
        var bounds = new window.google.maps.LatLngBounds()
        this.getPath().forEach(function(element,index){bounds.extend(element)})
        return bounds
    }
    }
  }), [isLoaded];
  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onClick={onClick}

    >
      <Data onLoad={onDataLoad}/>
      {centros.map((departamento, i)=>(
            <Marker
            key={i}
            //onLoad={onLoad}
            position={departamento.latLng}
            label={departamento.departamento}
            visible={false}
          />
      ))}
    </GoogleMap>
  ) : <></>
}

export default Maps
