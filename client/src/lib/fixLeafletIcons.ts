import * as L from "leaflet";
import markerIconUrl from "leaflet/dist/images/marker-icon.png";
import markerIconRetinaUrl from "leaflet/dist/images/marker-icon-2x.png";
import markerShadowUrl from "leaflet/dist/images/marker-shadow.png";

export function fixLeafletIcons() {
  // This pattern is commonly used to make default icons resolve in Vite builds.

  L.Icon.Default.prototype.options.iconUrl = markerIconUrl;

  L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;

  L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;

  L.Icon.Default.imagePath = "";
}
