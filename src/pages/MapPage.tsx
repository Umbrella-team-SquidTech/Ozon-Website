import "../index.css";
import { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import markers from "../markers.json";
import RootLayout from "@/components/RootLayout";
import { createRoot } from "react-dom/client";
import { Feature } from "geojson";
import pin from "./assets/Pin.svg";
import "mapbox-gl/dist/mapbox-gl.css";
import ApplicationHeader from "@/components/ApplicationHeader";

function MapPage() {
  // mapbox toker
  mapboxgl.accessToken =
    "pk.eyJ1IjoienZraTEiLCJhIjoiY2x5ZWNhZXRpMDExcDJrcW8zaTlubDFlMSJ9.JKxu32laTXbJs1hmX0-1VA";
  // map container red
  const mapContainer = useRef(null);
  const ref = useRef<null | HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  // rand states
  const [lng, setLng] = useState(-70.9);
  const [lat, setLat] = useState(42.35);
  const [zoom, setZoom] = useState(9);

  // useEffect tloadi la map
  useEffect(() => {
    if (map.current) return; // initialize map only once
    // putting the map in the container
    map.current = new mapboxgl.Map({
      container: mapContainer.current || document.createElement("div"),
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    // creating markers for each event
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
      // popUp
      // if (map.current) {
      //   new mapboxgl.Marker(ref.current)
      //     .setLngLat([lng, lat])
      //     .setPopup(
      //       new mapboxgl.Popup({ offset: 25 }) // add popups
      //         .setHTML(
      //           `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
      //         )
      //     )
      //     .addTo(map.current);
      // }
    });
    map.current.addControl(new mapboxgl.NavigationControl());
  });

  return (
    <RootLayout>
      <div className={" w-full h-screen  pt-[80px] overflow-y-hidden"}>
        <div ref={mapContainer} className=" w-full h-full " />
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

function markerClicked(description: string): void {
  throw new Error("Function not implemented.");
}
