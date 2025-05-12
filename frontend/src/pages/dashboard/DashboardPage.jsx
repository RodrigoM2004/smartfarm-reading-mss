import { Outlet } from "react-router-dom"
import {useState} from "react"
import { FaThermometerHalf, FaSun, FaFlask, FaBatteryFull, FaMap } from "react-icons/fa"

export default function DashboardPage() {

    const [selectedIndex, setSelectedIndex] = useState(0)

    return (
    <div className="w-screen h-screen relative">
        <div className="w-1/7 h-full bg-white absolute left-0">
            <div className="flex flex-col w-full h-screen">
                <div className="w-full h-1/3 "></div>
                <div className="w-full h-1/3 flex flex-col items-end justify-center gap-2">
                    <SideBarButton title={"MAPA"} myIndex={0} selectedIndex={selectedIndex} icon={<FaMap size={24}/>}/>
                    <SideBarButton title={"LUMINOSIDADE"} myIndex={1} selectedIndex={selectedIndex} icon={<FaSun size={24}/>}/>
                    <SideBarButton title={"pH"} myIndex={2} selectedIndex={selectedIndex} icon={<FaFlask size={24}/>}/>
                    <SideBarButton title={"TEMPERATURA"} myIndex={3} selectedIndex={selectedIndex} icon={<FaThermometerHalf size={24}/>}/>
                    <SideBarButton title={"BATERIA"} myIndex={4} selectedIndex={selectedIndex} icon={<FaBatteryFull size={24}/>}/>
                </div>
                <div className="w-full h-1/3 "></div>   
            </div>
        </div>
        <div className="w-6/7 h-screen  absolute right-0">
            <Outlet/>
        </div>
    </div>

           )
}

export function SideBarButton({title, myIndex, selectedIndex, icon, onClick}) {


    if(myIndex == selectedIndex){
        return (
        <div className={`w-full h-1/6 flex flex-row `}>
            <div className="w-2 bg-blue-950 rounded-r-sm mr-2"></div>
            <div className="w-[20%] h-full  flex justify-center items-center text-blue-950">
            {icon}
            </div>
            <div className={`w-[80%] h-full flex items-center justify-start pl-2`}>
                <h1 className="text-blue-950 font-bold">{title}</h1>
            </div>
        </div>
        )
    }
    return (
    <div className={`w-[90%] h-1/6 flex flex-row  p-1 cursor-pointer`}>
        <div className="w-[20%] h-full  flex justify-center items-center text-gray-400">
            {icon}
            </div>
        <div className={`w-[80%] h-full flex items-center justify-start pl-2 `}>
            <h1 className="text-gray-400 font-bold">{title}</h1>
        </div>
    </div>
    )
}