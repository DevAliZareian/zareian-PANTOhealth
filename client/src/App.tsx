import { useMemo } from "react";
import { useStations } from "./hooks/useStations";
import { useStationsUIStore } from "./store/useStationsUIStore";
import { CityFilter } from "./components/CityFilter";
import { StationsList } from "./components/StationsList";
import { StationsMap } from "./components/StationsMap";
import type { Station } from "./types/station";

export default function App() {
  const { data, isLoading, isError, error, refetch } = useStations();

  const cityFilter = useStationsUIStore((s) => s.cityFilter);

  const stations: Station[] = useMemo(() => data ?? [], [data]);

  const cities = useMemo(() => stations.map((s) => s.city), [stations]);

  const filtered = useMemo(() => {
    const q = cityFilter.trim().toLowerCase();
    if (!q) return stations;
    return stations.filter((s) => s.city.toLowerCase().includes(q));
  }, [stations, cityFilter]);

  return (
    <div className="h-screen">
      <div className="h-full grid grid-cols-1 md:grid-cols-[380px_1fr] gap-4 p-4">
        <aside className="space-y-4">
          <div className="space-y-1">
            <h1 className="text-xl font-semibold">Ali Zareian</h1>
            <p className="text-sm text-gray-600">Leaflet map + filter + list interaction</p>
          </div>

          <CityFilter cities={cities} />

          {isLoading && <div className="rounded-md border p-3 text-sm">Loading stations…</div>}

          {isError && (
            <div className="rounded-md border p-3 text-sm">
              <div className="font-medium">Failed to load stations</div>
              <div className="text-gray-600">{(error as Error)?.message ?? "Unknown error"}</div>
              <button className="mt-2 rounded-md border px-3 py-2 text-sm" onClick={() => refetch()} type="button">
                Retry
              </button>
            </div>
          )}

          {!isLoading && !isError && <StationsList stations={filtered} />}
        </aside>

        <main className="min-h-[300px] mb-4">
          <div className="h-full">
            <StationsMap stations={filtered} />
          </div>
        </main>
      </div>
    </div>
  );
}
