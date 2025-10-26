import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import * as L from "leaflet";
import "leaflet/dist/leaflet.css";

type Location = {
    name: string;
    position: [number, number];
    description: string;
};

const locations: Location[] = [
    { name: "Lemonfit - Póvoa de Santa Iria", position: [38.862543295306416, -9.079711262077275], description: "Treinos Gi e No-Gi / Aula kids" },
    { name: "Campo de treino - Alto do Pina", position: [38.734821, -9.128639], description: "Treinos Gi e No-Gi / Aula kids" },
];

// ✅ Red Marker Icon
const redIcon = new L.Icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    iconRetinaUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
    iconSize: [28, 45],
    iconAnchor: [14, 45],
    popupAnchor: [0, -40],
});

const FitBounds: React.FC<{ positions: [number, number][] }> = ({ positions }) => {
    const map = useMap();
    React.useEffect(() => {
        const bounds = L.latLngBounds(positions);
        map.fitBounds(bounds, { padding: [40, 40] });
    }, [positions, map]);
    return null;
};

const MapSection: React.FC = () => (
    <section className="w-full flex flex-col items-center py-20 bg-dark-bg-primary">
        <div className="relative w-full max-w-5xl h-[450px] rounded-2xl overflow-hidden shadow-2xl border border-[#2d2d2d]">
            {/* Map */}
            <MapContainer
                center={[38.7167, -9.1390]}
                zoom={13}
                scrollWheelZoom={true}
                zoomControl={true}
                style={{ height: "100%", width: "100%" }}
            >
                {/* Light Map Style */}
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/attributions">CARTO</a>'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

                <FitBounds positions={locations.map((l) => l.position)} />

                {locations.map((loc, idx) => (
                    <Marker key={idx} position={loc.position} icon={redIcon}>
                        <Popup>
                            <div className="text-sm">
                                <h3 className="font-bold text-dark-title-secondary mb-1">{loc.name}</h3>
                                <p className="text-dark-text-primary mb-1">{loc.description}</p>
                                <a
                                    href={`https://www.google.com/maps/dir/?api=1&destination=${loc.position[0]},${loc.position[1]}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Ver direções →
                                </a>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    </section>
);

export default MapSection;
