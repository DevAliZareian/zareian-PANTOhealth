import { useQuery } from "@tanstack/react-query";
import { fetchStations } from "../api/stations";

export function useStations() {
  return useQuery({
    queryKey: ["stations"],
    queryFn: fetchStations,
  });
}
