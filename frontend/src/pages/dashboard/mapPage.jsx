import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';
import { useUser } from '../../utils/contexts/UserContext';

export default function MapPage() {

    const { setSelectedIndex } = useSidebar()
    const { userData } = useUser()

    useEffect(() => {
    setSelectedIndex(0)
  }, [setSelectedIndex])

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
    {userData.sensors.map((sensor) => {
        return <Marker key={sensor.id} position={[sensor.latitude, sensor.longitude]} riseOnHover = {true}>
            <Popup>
                {sensor.id}
            </Popup>
        </Marker>
})}
   
    
  </MapContainer>
    </div>
}