import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';
import { useUser } from '../../utils/contexts/UserContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function LumPage() {

        const { setSelectedIndex } = useSidebar()
        const { userData, dashboardFilterInitialData, dashboardFilterFinalData } = useUser()
    
        useEffect(() => {
        setSelectedIndex(1)
      }, [setSelectedIndex])



    return <div className="w-full h-full flex p-8 text-black text-5xl">
      <div className='w-full h-60'>
        <div className='w-full h-15  bg-white rounded-md mb-8 p-2'>
          <div className='w-1/5 h-full bg-blue-950 rounded-md flex items-center justify-center'>
            <div className='text-white text-sm w-full h-full flex items-center p-2'>
             {dashboardFilterFinalData}
            </div>
          </div>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={userData.sensors[1].readings} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="data" />
            <YAxis   tick={{ fontSize: 12 }}/>
            <Tooltip contentStyle={{
    fontSize: '14px',
    padding: '5px 10px'
  }}/>
           
            <Line type="monotone" dataKey="luminosity" stroke="#162456" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
}