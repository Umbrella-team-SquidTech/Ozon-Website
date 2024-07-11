import { useEffect, useState } from "react";
import { renderToDom } from "../components/CreateEvent/CreateEventMap";
import useGeoLoactionStore from "@/stores/useGeoLocation";
const CreateEvent = () => {
  const { geoLocation } = useGeoLoactionStore();
  useEffect(() => {
    
    console.log(geoLocation?.long,"from create event");
    console.log(geoLocation?.lat,"from create event");
  }, [geoLocation]);

  useEffect(() => {
    renderToDom("map");
  }, []);

  return (
    <div>
      {/* rendering map  container */}
      {/* NOTE:dont delete the id  */}
      <div id="map" className="h-screen w-screen"></div>
    </div>
  );
};

export default CreateEvent;
