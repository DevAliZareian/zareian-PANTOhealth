import { useMemo } from "react";
import { useStationsUIStore } from "../store/useStationsUIStore";

type Props = {
  cities: string[];
};

export function CityFilter({ cities }: Props) {
  const cityFilter = useStationsUIStore((s) => s.cityFilter);
  const setCityFilter = useStationsUIStore((s) => s.setCityFilter);

  const options = useMemo(() => [...new Set(cities)].sort((a, b) => a.localeCompare(b)), [cities]);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium">Filter by city</label>

      <div className="flex gap-2">
        <input className="w-full rounded-md border px-3 py-2 text-sm" placeholder="e.g. Berlin" value={cityFilter} onChange={(e) => setCityFilter(e.target.value)} list="cities" />
        <button className="rounded-md border px-3 py-2 text-sm disabled:opacity-50" onClick={() => setCityFilter("")} disabled={!cityFilter.trim()} type="button">
          Clear
        </button>
      </div>

      <datalist id="cities">
        {options.map((c) => (
          <option key={c} value={c} />
        ))}
      </datalist>
    </div>
  );
}
