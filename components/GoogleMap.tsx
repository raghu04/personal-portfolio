import { useEffect, useRef } from "react";
import { darkModeStyle } from "./darkModeStyle";

type GoogleMapProps = {
  lat: number;
  lng: number;
  zoom: number;
};

const GoogleMap: React.FC<GoogleMapProps> = ({ lat, lng, zoom }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mapRef.current || !window.google) return;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat, lng },
      zoom,
      styles: darkModeStyle, // Apply dark mode style here
      mapTypeControl: false, // Disable map type control (for satellite toggle)
      fullscreenControl: false, // Disable fullscreen control
      zoomControl: false, // Disable zoom in/out control
      streetViewControl: false, // Optional: Disable street view control
      keyboardShortcuts: false,
    });

    new window.google.maps.Marker({
      position: { lat, lng },
      map,
    });
  }, [lat, lng, zoom]);

  return <div ref={mapRef} className="w-full h-[500px]" />;
};

export default GoogleMap;
