import { create } from "zustand";

type StationsUIState = {
  cityFilter: string;
  setCityFilter: (value: string) => void;

  selectedStationId: number | null;
  setSelectedStationId: (id: number | null) => void;
};

export const useStationsUIStore = create<StationsUIState>((set) => ({
  cityFilter: "",
  setCityFilter: (cityFilter) => set({ cityFilter }),

  selectedStationId: null,
  setSelectedStationId: (selectedStationId) => set({ selectedStationId }),
}));
