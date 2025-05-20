
import { processListData, getDiferenceReadingVsAverage } from "../../../../utils/dashHelper";
import { useUser } from "../../../../utils/contexts/UserContext";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
        

export default function CustomList({ info }) {

    const { userData, dashboardFilterInitialData, dashboardFilterFinalData } = useUser()
    return (
        <>
        <div className='w-full h-1/9 bg-blue-950 rounded-t-md flex items-center justify-center'></div>
        <div className='w-full h-8/9 rounded-b-md flex overflow-y-scroll flex-col items-center gap-1 px-2 '>

             {processListData(userData.sensors, info).map((item, index) => {
                const localDate = new Date(item.date);
                return (
                  <div key={index} className='w-full flex items-center justify-between p-1 flex-row'>
                    <div className='flex items-center'>
                        <div className='border-2 border-blue-950 h-8 w-30 rounded-sm flex items-center justify-center mr-2 text-lg font-bold'>
                          {localDate.toLocaleDateString('pt-BR', {
                            day: '2-digit',
                            month: '2-digit',
                            year: 'numeric',
                          })}
                        </div>
                          <div className='mr-2 w-[40%] '>
                            Sensor #{item.sensorId}
                          </div>
                    </div>
                    <div className="text-end  w-[40%] h-8 flex items-center justify-end ">
                      {item.value}%
                    </div>
                    <div
                      className={`p-2 rounded-md w-18 h-8 flex items-center gap-1 justify-center
                        ${
                          getDiferenceReadingVsAverage(userData.sensors, info, item.value) >= 0
                            ? "bg-orange-200 text-orange-800"
                            : "bg-blue-200 text-blue-800"
                        }`}
                    >
                      {getDiferenceReadingVsAverage(userData.sensors, info, item.value) >= 0 ? <div className="flex flex-row"> <FaArrowTrendUp size={12}/> </div> : <div className="flex flex-row"> <FaArrowTrendDown size={12}/> </div>}
                      <div>

                        {Math.abs(getDiferenceReadingVsAverage(userData.sensors, info, item.value))}%
                      </div>
                    </div>
                  </div>
                )
             })}
            </div>
        </>
    )
}