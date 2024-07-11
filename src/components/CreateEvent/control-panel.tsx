import React, { useState, useEffect } from "react"; // Import useEffect
import { LngLat } from "react-map-gl";
import useGeoLoactionStore from "@/stores/useGeoLocation";
const eventNames = ["onDragStart", "onDrag", "onDragEnd"];

function round5(value: number) {
  return (Math.round(value * 1e5) / 1e5).toFixed(5);
}

function ControlPanel(props: { events: Record<string, LngLat> }) {
  const { events } = props;
  const { setGeoLocation } = useGeoLoactionStore(); // Get the setGeoLocation function from the store
  // useEffect hook to update state when onDragEnd event changes
  useEffect(() => {
    if (events.onDragEnd) {
      console.log(
        `onDragEnd lng: ${round5(events.onDragEnd.lng)}, lat: ${round5(
          events.onDragEnd.lat
        )}`
      );
      const long = parseFloat(round5(events.onDragEnd.lng));
      const lat = parseFloat(round5(events.onDragEnd.lat));

      setGeoLocation({ long, lat }); // Update the store with the new location
    }
  }, [events.onDragEnd]); // Dependency array includes events.onDragEnd

  return (
    <div className="control-panel">
      <h3>Draggable Marker</h3>
      <p>Try dragging the marker to another location.</p>
      <div>
        {eventNames.map((eventName) => (
          <div key={eventName}>
            <strong>{eventName}:</strong>{" "}
            {events[eventName] ? (
              `${round5(events[eventName].lng)}, ${round5(
                events[eventName].lat
              )}`
            ) : (
              <em>null</em>
            )}
          </div>
        ))}
      </div>
      <div className="source-link">
        <a
          href="https://github.com/visgl/react-map-gl/tree/7.1-release/examples/draggable-markers"
          target="_new"
          rel="noopener noreferrer"
        >
          View Code ↗
        </a>
      </div>
    </div>
  );
}

export default ControlPanel;
