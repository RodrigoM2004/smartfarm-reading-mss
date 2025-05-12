import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function MapPage() {

    const position = [51.505, -0.09]

    return <div className="w-full h-full flex items-center justify-center text-black text-5xl">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      style = {{height: "100px"}}
    />
    
  </MapContainer>
    </div>
}