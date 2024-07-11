import  { useState, useCallback, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Map, { Marker, NavigationControl } from 'react-map-gl';

import ControlPanel from '@/components/CreateEvent/control-panel';
import Pin from '@/components/CreateEvent/pin';

import type { MarkerDragEvent, LngLat } from 'react-map-gl';
import axios from '@/config/axios';

const TOKEN = import.meta.env.VITE_MAPBOX_TOKEN as string; // Set your mapbox token here

const initialViewState = {
  latitude: 36.7617,
  longitude: 3.05651,
  zoom: 3.5
};

export default function CreateEventMap(){
  const [viewState, setViewState] = useState(initialViewState);
  const [marker, setMarker] = useState({
    latitude: 36.7617,
    longitude: 3.05651
  });
  const [events, logEvents] = useState<Record<string, any>>({});

  useEffect(() => {
    axios.get('http://ip-api.com/json/')
      .then(response => {
        const { lat, lon } = response.data;
        setViewState({
          latitude: lat,
          longitude: lon,
          zoom: 12
        });
        setMarker({
          latitude: lat,
          longitude: lon
        });
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onMarkerDragStart = useCallback((event) => {
    logEvents(_events => ({ ..._events, onDragStart: event.lngLat }));
  }, []);

  const onMarkerDrag = useCallback((event) => {
    logEvents(_events => ({ ..._events, onDrag: event.lngLat }));
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat
    });
  }, []);

  const onMarkerDragEnd = useCallback((event) => {
    logEvents(_events => ({ ..._events, onDragEnd: event.lngLat }));
  }, []);

  return (
    <>
      <Map
        initialViewState={viewState}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={TOKEN}
      >
        <Marker
          longitude={marker.longitude}
          latitude={marker.latitude}
          anchor="bottom"
          draggable
          onDragStart={onMarkerDragStart}
          onDrag={onMarkerDrag}
          onDragEnd={onMarkerDragEnd}
        >
          <Pin size={20} />
        </Marker>

        <NavigationControl />
      </Map>
      <ControlPanel events={events} />
    </>
  );
}


export function renderToDom(containerId: string) {
  const container = document.getElementById(containerId);
  if (container) {
    createRoot(container).render(<CreateEventMap />);
  } else {
    console.error("Container with ID ${containerId} not found");
  }
}
