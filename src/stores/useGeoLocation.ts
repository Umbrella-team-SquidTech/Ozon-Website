import { create } from "zustand";

type GeoLocationState = {
  geoLocation: GeoLocationI | null;
  setGeoLocation: (geoLocation: GeoLocationI | null) => void;
  removeGeoLocation: () => void;
};

const useGeoLoactionStore = create<GeoLocationState>((set) => ({
    geoLocation: null,
    setGeoLocation: (geoLocation) => {
        return set({ geoLocation });
    },
    removeGeoLocation: () => {
        return set({ geoLocation: null });
    },
}));

export default useGeoLoactionStore;
