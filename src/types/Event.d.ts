declare interface EventI {
  id: number;
  name: string;
  description: string;
  address: string;
  latitude: number;
  longitude: number;
  event_type: string;
  event_type_id: number;
  start: string;
  limit: number;
  organizer: UserI;
  images: string[];
  created_at: string;
  participations: number;
}
