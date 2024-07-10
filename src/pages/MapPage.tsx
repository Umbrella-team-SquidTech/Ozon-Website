/* eslint-disable react-hooks/exhaustive-deps */
import "../index.css";
import { useRef, useEffect, useState } from "react";
import EventPopup from "@/components/MapPage/EventPopup";
import mapboxgl from "mapbox-gl";
import RootLayout from "@/components/RootLayout";
// import { createRoot } from "react-dom/client";
import axios from "axios";
import customAxios from "@/config/axios";
import "mapbox-gl/dist/mapbox-gl.css";
import { generateFeatures } from "@/utils/geojson";
function MapPage() {
  mapboxgl.accessToken = "pk.eyJ1IjoienZraTEiLCJhIjoiY2x5ZWNhZXRpMDExcDJrcW8zaTlubDFlMSJ9.JKxu32laTXbJs1hmX0-1VA";

  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const [longOfUSer, setLng] = useState(0);
  const [lattOfUser, setLat] = useState(0);
  const [zoom] = useState(5);

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState<null | {
    id: number;
    name: string;
    description: string;
    address: string;
    start: string;
    organizer: UserI;
    event_type: string;
    images: string[];
    participations: number;
  }>(null);



  useEffect(() => {
    customAxios
      .get("/events")
      .then((res) => {
        setEvents(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        setLng(response.data.lon);
        setLat(response.data.lat);
      })
      .catch((error) => {
        console.log(error);
      });

      if (map.current) return;
      // creating the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current || document.createElement("div"),
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longOfUSer, lattOfUser],
      zoom: zoom,
    });

    map.current.addControl(new mapboxgl.NavigationControl());

  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([longOfUSer, lattOfUser]);

      const geoJsonData = generateFeatures(events);
// creating the markers from generated geojson data 
      geoJsonData.features.forEach(feature => {
        const el = document.createElement('div');
        el.className = 'marker';

        el.addEventListener('click', () => {
          setSelectedEvent(feature.properties);
        });

        if (map.current) {
          new mapboxgl.Marker(el)
            .setLngLat(feature.geometry.coordinates as mapboxgl.LngLatLike)
            .addTo(map.current);
        }
      });

    }
  }, [events, longOfUSer, lattOfUser]);

  return (
    <RootLayout>
      <div className="w-full h-screen pt-[80px] overflow-y-hidden">
        <div ref={mapContainer} className="w-full h-full" />
        {selectedEvent && <EventPopup event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
      </div>
    </RootLayout>
  );
}



export default MapPage;
