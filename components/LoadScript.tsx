import { useEffect } from "react";

type LoadScriptProps = {
  apiKey: string;
  onLoad: () => void; // Callback function when the script is loaded
};

const LoadScript: React.FC<LoadScriptProps> = ({ apiKey, onLoad }) => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const existingScript = document.getElementById("google-maps");

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "google-maps";
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}`;
      script.async = true;
      script.defer = true;
      script.onload = onLoad; // Trigger the callback when the script is loaded
      document.head.appendChild(script);
    } else {
      onLoad(); // If script already exists, trigger the callback
    }
  }, [apiKey, onLoad]);

  return null;
};

export default LoadScript;
