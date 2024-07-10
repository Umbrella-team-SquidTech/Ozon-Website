
export function generateFeatures(events: EventI[]) {
  
  return {
    type: "FeatureCollection",
    features: events.map(event => ({
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [event.longitude, event.latitude]
      },
      properties: {
        id: event.id,
        name: event.name,
        description: event.description,
        address: event.address,
        start: event.start,
        organizer: event.organizer,
        event_type: event.event_type,
        images: event.images,
        participations: event.participations
      }
    }))
  };
}
