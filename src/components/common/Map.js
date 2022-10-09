import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const center = {
  lat: 10.808331561852572,
  lng: 106.68187436824452,
}

function BlockMap({ className }) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAm_CdIqQsD_mK9EQAiEdwLrc_bgZy7Ubs',
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerClassName={className}
      mapContainerStyle={{ backgroundColor: '-WHITE' }}
      center={center}
      zoom={16}
      onLoad={onLoad}
      onUnmount={onUnmount}>
      <Marker position={center} />
      <></>
    </GoogleMap>
  ) : (
    <></>
  )
}

export default React.memo(BlockMap)
