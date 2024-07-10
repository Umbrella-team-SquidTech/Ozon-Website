/* eslint-disable react-hooks/exhaustive-deps */
import "../index.css";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import markers from "../data/markers.json";
import RootLayout from "@/components/RootLayout";
import { createRoot } from "react-dom/client";
import { Feature } from "geojson";

import "mapbox-gl/dist/mapbox-gl.css";
import axios from "axios";
import userMarkerImg from "../assets/MapPage/Userpin.svg";

function MapPage() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoienZraTEiLCJhIjoiY2x5ZWNhZXRpMDExcDJrcW8zaTlubDFlMSJ9.JKxu32laTXbJs1hmX0-1VA";

  const mapContainer = useRef(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const [longOfUSer, setLng] = useState(0);
  const [lattOfUser, setLat] = useState(0);
  const [zoom] = useState(5);

  const userMarker = useRef<mapboxgl.Marker | null>(null);

  useEffect(() => {
    axios
      .get("http://ip-api.com/json/")
      .then((response) => {
        console.log(response.data);
        setLng(response.data.lon);
        setLat(response.data.lat);
      })
      .catch((error) => {
        console.log(error);
      });

    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainer.current || document.createElement("div"),
      style: "mapbox://styles/mapbox/streets-v12",
      center: [longOfUSer, lattOfUser],
      zoom: zoom,
    });

    // Creating markers for each event
    markers.features.forEach((feature) => {
      // Create a new DOM node and save it to the React ref
      ref.current = document.createElement("div");
      // Render a Marker Component on our new DOM node
      createRoot(ref.current).render(<Marker feature={feature as Feature} />);

      // Create a Mapbox Marker at our new DOM node
      const [lng, lat] = feature.geometry.coordinates;
      if (map.current) {
        new mapboxgl.Marker(ref.current)
          .setLngLat([lng, lat])
          .addTo(map.current);
      }
    });

    map.current.addControl(new mapboxgl.NavigationControl());

    // const userMarkerElement = document.createElement("div");

    // userMarkerElement.style.backgroundImage = `url(${userMarkerImg})`;
    // userMarkerElement.style.width = "28px";
    // userMarkerElement.style.height = "44px";
    // userMarkerElement.style.backgroundSize = "cover";

    // userMarker.current = new mapboxgl.Marker(userMarkerElement)
    //   .setLngLat([longOfUSer, lattOfUser])
    //   .addTo(map.current);
  }, []);

  useEffect(() => {
    if (map.current) {
      map.current.setCenter([longOfUSer, lattOfUser]);

      if (userMarker.current) {
        userMarker.current.setLngLat([longOfUSer, lattOfUser]);
      }
    }
  }, [longOfUSer, lattOfUser]);

  return (
    <RootLayout>
      <div className="w-full h-screen pt-[80px] overflow-y-hidden">
        <div ref={mapContainer} className="w-full h-full" />
      </div>
    </RootLayout>
  );
}

export default MapPage;

const Marker = ({ feature }: { feature: Feature }) => {
  const _onClick = () => {
    // alert(feature?.properties?.description);
    // console.log(feature);
  };

  return (
    <button onClick={_onClick} className="marker">
      {/* {children} */}
      {/* <img src={pin} alt=" pin" className="bg-cover" /> */}
      {/* <h1>event</h1> */}
    </button>
  );
};
