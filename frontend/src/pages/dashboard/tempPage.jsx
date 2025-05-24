import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';
import CustomList from './components/list/customList';
import { useUser } from '../../utils/contexts/UserContext';
import CustomLineChart from './components/linechart/linechart';

export default function TemperaturePage() {

        const { setSelectedIndex } = useSidebar()
        const { userData } = useUser()
    
        useEffect(() => {
        setSelectedIndex(3)
      }, [setSelectedIndex])

    return <div className="w-full h-full flex p-8 text-black text-5x flex-col">
          <div className='w-full h-60'>
            <div className='w-full h-15  bg-white rounded-md mb-8 p-2'>
              <div className='w-1/5 h-full bg-blue-950 rounded-md flex items-center justify-center'>
                <div className='text-white text-sm w-full h-full flex items-center p-2'>
                 {/* {dashboardFilterFinalData} */}
                </div>
              </div>
              
            </div>
            <div>
              
            </div>
            <CustomLineChart info={"temp"}/>
            <div className='w-full h-100 rounded-md mb-8 flex flex-row gap-4'>
              <div className=' w-1/2 h-100 mt-8 grid grid-cols-2 gap-4'>
                <div className='bg-white w-full h-full rounded-md'>
                  
                </div>
                <div className='bg-white w-full h-full rounded-md'></div>
                <div className='bg-white w-full h-full rounded-md'></div>
                <div className='bg-white w-full h-full rounded-md'></div>
              </div>
              <div className='bg-white w-1/2 h-100 mt-8'>
                <CustomList data={userData} info={"temp"}/>
              </div>
            </div>
          </div>
        </div>
}