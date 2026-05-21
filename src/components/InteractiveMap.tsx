'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';

// TopoJSON with world geography
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

// Mapping of English names from the geoUrl to our routing IDs and data
const supportedCountriesInfo: Record<string, { id: string, name: string, flag: string, coordinates: [number, number] }> = {
  "Germany": { id: 'nemecko', name: 'Německo', flag: '🇩🇪', coordinates: [10.4515, 51.1657] },
  "Austria": { id: 'rakousko', name: 'Rakousko', flag: '🇦🇹', coordinates: [14.5501, 47.5162] },
  "Poland": { id: 'polsko', name: 'Polsko', flag: '🇵🇱', coordinates: [19.1451, 51.9194] },
  "Slovakia": { id: 'slovensko', name: 'Slovensko', flag: '🇸🇰', coordinates: [19.6990, 48.6690] },
  "Italy": { id: 'italie', name: 'Itálie', flag: '🇮🇹', coordinates: [12.5674, 41.8719] },
  "France": { id: 'francie', name: 'Francie', flag: '🇫🇷', coordinates: [2.2137, 46.2276] },
  "Hungary": { id: 'madarsko', name: 'Maďarsko', flag: '🇭🇺', coordinates: [19.5033, 47.1625] },
  "Netherlands": { id: 'holandsko', name: 'Holandsko', flag: '🇳🇱', coordinates: [5.2913, 52.1326] },
  "Belgium": { id: 'belgie', name: 'Belgie', flag: '🇧🇪', coordinates: [4.4699, 50.5039] },
};

const supportedCountriesList = Object.values(supportedCountriesInfo);

export default function InteractiveMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const router = useRouter();

  return (
    <div className="flex flex-col lg:flex-row gap-12 items-center bg-zinc-900 border border-border p-8 mt-12">
      {/* Map visual representation */}
      <div className="w-full lg:w-3/5 relative aspect-[4/3] bg-zinc-800 rounded-sm overflow-hidden border border-border">
        <ComposableMap
          projection="geoAzimuthalEqualArea"
          projectionConfig={{
            rotate: [-15.0, -52.0, 0], // Center on Europe
            scale: 1200 // Zoom in on Europe
          }}
          className="w-full h-full cursor-default"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                // Check if the country is one of our supported ones
                const geoName = geo.properties.name;
                const isSupported = !!supportedCountriesInfo[geoName];
                const isCZ = geoName === "Czechia" || geoName === "Czech Republic";

                let fillColor = "#27272a"; // Default gray for other countries
                if (isCZ) {
                  fillColor = "#d90429"; // Primary red for CZ
                } else if (isSupported) {
                  fillColor = "#3f3f46"; // Lighter gray for supported
                }

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={fillColor}
                    stroke="#18181b"
                    strokeWidth={1}
                    style={{
                      default: { outline: "none" },
                      hover: { fill: isSupported ? "#d90429" : fillColor, outline: "none", transition: "all 0.3s" },
                      pressed: { outline: "none" },
                    }}
                    onMouseEnter={() => {
                      if (isSupported) setTooltipContent(supportedCountriesInfo[geoName].name);
                      else if (isCZ) setTooltipContent("Česká republika");
                    }}
                    onMouseLeave={() => setTooltipContent("")}
                    onClick={() => {
                      if (isSupported) {
                        window.location.href = `/dovoz/${supportedCountriesInfo[geoName].id}`;
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>

          {/* Czech Republic Label */}
          <Marker coordinates={[15.4730, 49.8175]}>
            <text textAnchor="middle" y={15} style={{ fontFamily: "system-ui", fill: "#fff", fontSize: "14px", fontWeight: "bold" }} className="pointer-events-none drop-shadow-md">
              CZ
            </text>
          </Marker>

          {/* Markers for supported countries */}
          {supportedCountriesList.map(({ id, name, coordinates }) => (
            <Link key={id} href={`/dovoz/${id}`}>
              <Marker 
                coordinates={coordinates}
                onMouseEnter={() => setTooltipContent(name)}
                onMouseLeave={() => setTooltipContent("")}
              >
                <circle r={4} fill="#a1a1aa" className="hover:fill-primary transition-colors cursor-pointer" />
                {tooltipContent === name && (
                  <text textAnchor="middle" y={-10} style={{ fontFamily: "system-ui", fill: "#fff", fontSize: "12px", fontWeight: "bold" }} className="pointer-events-none drop-shadow-md">
                    {name}
                  </text>
                )}
              </Marker>
            </Link>
          ))}
        </ComposableMap>
      </div>

      {/* Countries List */}
      <div className="w-full lg:w-2/5 flex flex-col">
        <h3 className="text-2xl font-bold uppercase mb-6 text-white border-b border-border pb-4">
          Pravidelné linky
        </h3>
        <p className="text-muted-foreground mb-6">
          Klikněte na zemi na mapě nebo vyberte ze seznamu pro zobrazení podrobných informací o dovozu z dané destinace.
        </p>
        
        <div className="grid grid-cols-2 gap-3 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
          {supportedCountriesList.map((country) => (
            <Link
              key={country.id}
              href={`/dovoz/${country.id}`}
              className="flex items-center gap-3 p-3 bg-card border border-border hover:border-primary hover:bg-zinc-800 transition-colors group"
            >
              <span className="text-xl">{country.flag}</span>
              <span className="font-semibold text-sm group-hover:text-primary transition-colors uppercase tracking-wider">{country.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
