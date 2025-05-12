import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";

export default function MapPage() {

    const position = [-23.6785, -46.7039]

    // const customIcon = L.icon({
    //     iconUrl: 'your-icon.png', // Path to your custom icon image
    //     iconSize: [32, 32], // Size of the icon
    //     iconAnchor: [16, 32], // Point of the icon which will correspond to marker's location
    //     popupAnchor: [0, -32], // Point from which the popup should open relative to the iconAnchor
    //   });

    return <div className="w-full h-full flex items-center justify-center text-black text-5xl">
        <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      style = {{height: "100px"}}
    />
    <Marker position={[-23.6785, -46.7039]} riseOnHover = {true}>
    <Popup >
        teste
    </Popup>
  </Marker>
    
  </MapContainer>
    </div>
}