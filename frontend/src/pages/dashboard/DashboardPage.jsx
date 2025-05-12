import { Outlet } from "react-router-dom"

export default function DashboardPage() {
    return (
    <div className="w-screen h-screen relative">
        <div className="w-1/7 h-full bg-blue-800 absolute left-0">
            <div className="flex flex-col w-full h-screen">
                <div className="w-full h-1/3 "></div>
                <div className="w-full h-1/3 flex flex-col items-end justify-center gap-2">
                    <SideBarButton title={"MAPA"}/>
                    <SideBarButton title={"LUMINOSIDADE"}/>
                    <SideBarButton title={"pH"}/>
                    <SideBarButton title={"TEMPERATURA"}/>
                    <SideBarButton title={"BATERIA"}/>
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

export function SideBarButton({title}) {
    return (<div className="w-[90%] h-1/6 flex flex-row">
        <div className="w-[20%] h-full bg-blue-500"></div>
        <div className="w-[80%] h-full flex items-center justify-start pl-2">
            <h1 className="text-white">{title}</h1>
        </div>
    </div>)
}