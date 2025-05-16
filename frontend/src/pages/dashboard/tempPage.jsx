import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';

import { useUser } from '../../utils/contexts/UserContext';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function TemperaturePage() {

        const { setSelectedIndex } = useSidebar()
        const { userData } = useUser()
    
        useEffect(() => {
        setSelectedIndex(3)
      }, [setSelectedIndex])

    return <div className="w-full h-full flex p-8 text-black text-5xl">
          <div className='w-full h-100'>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={userData.sensors[1].readings} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="data" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
}