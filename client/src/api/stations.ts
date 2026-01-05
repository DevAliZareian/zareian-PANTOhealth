import axios from "axios";
import type { Station } from "../types/station";

const STATIONS_URL = import.meta.env.VITE_STATIONS_URL;

export async function fetchStations(): Promise<Station[]> {
  const res = await axios.get<Station[]>(STATIONS_URL);
  return res.data;
}
