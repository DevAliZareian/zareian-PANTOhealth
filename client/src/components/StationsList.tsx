import type { Station } from "../types/station";
import { useStationsUIStore } from "../store/useStationsUIStore";

type Props = {
  stations: Station[];
};

export function StationsList({ stations }: Props) {
  const selectedStationId = useStationsUIStore((s) => s.selectedStationId);
  const setSelectedStationId = useStationsUIStore((s) => s.setSelectedStationId);

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray-600">
        Showing <span className="font-medium">{stations.length}</span> station(s)
      </div>

      <ul className="divide-y rounded-md border">
        {stations.map((st) => {
          const active = st.id === selectedStationId;

          return (
            <li key={st.id}>
              <button type="button" onClick={() => setSelectedStationId(st.id)} className={["w-full text-left px-3 py-2", "hover:bg-gray-50", active ? "bg-gray-100" : ""].join(" ")}>
                <div className="font-medium">{st.name}</div>
                <div className="text-sm text-gray-600">{st.city}</div>
              </button>
            </li>
          );
        })}

        {stations.length === 0 && <li className="px-3 py-6 text-sm text-gray-600">No stations match this city filter.</li>}
      </ul>
    </div>
  );
}
