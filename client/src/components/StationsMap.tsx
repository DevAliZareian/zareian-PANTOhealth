import { useEffect, useMemo } from "react";
import { CircleMarker, MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import type { Station } from "../types/station";
import { useStationsUIStore } from "../store/useStationsUIStore";

const GERMANY_CENTER: [number, number] = [51.1657, 10.4515];
const DEFAULT_ZOOM = 6;
const FOCUS_ZOOM = 13;

function AutoFitAndFocus({ stations, selected }: { stations: Station[]; selected: Station | null }) {
  const map = useMap();

  useEffect(() => {
    if (selected) {
      map.flyTo([selected.lat, selected.lng], FOCUS_ZOOM, { duration: 0.6 });
      return;
    }

    // If filtering leaves some stations, fit bounds; otherwise reset to Germany.
    if (stations.length > 0) {
      const bounds = stations.map((s) => [s.lat, s.lng] as [number, number]);
      map.fitBounds(bounds, { padding: [30, 30] });
    } else {
      map.setView(GERMANY_CENTER, DEFAULT_ZOOM);
    }
  }, [map, selected, stations]);

  return null;
}

export function StationsMap({ stations }: { stations: Station[] }) {
  const selectedStationId = useStationsUIStore((s) => s.selectedStationId);
  const setSelectedStationId = useStationsUIStore((s) => s.setSelectedStationId);

  const selected = useMemo(() => stations.find((s) => s.id === selectedStationId) ?? null, [stations, selectedStationId]);

  return (
    <div className="h-full w-full">
      <MapContainer center={GERMANY_CENTER} zoom={DEFAULT_ZOOM} className="h-full w-full rounded-md border" scrollWheelZoom>
        <TileLayer attribution="&copy; OpenStreetMap contributors" url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <AutoFitAndFocus stations={stations} selected={selected} />

        {stations.map((st) => (
          <Marker
            key={st.id}
            position={[st.lat, st.lng]}
            eventHandlers={{
              click: () => setSelectedStationId(st.id),
            }}
          >
            <Popup>
              <div className="font-medium">{st.name}</div>
              <div>{st.city}</div>
            </Popup>
          </Marker>
        ))}

        {/* Simple highlight ring for the selected station */}
        {selected && (
          <CircleMarker center={[selected.lat, selected.lng]} radius={14} pathOptions={{}}>
            <Popup>
              <div className="font-medium">{selected.name}</div>
              <div>{selected.city}</div>
            </Popup>
          </CircleMarker>
        )}
      </MapContainer>
    </div>
  );
}
