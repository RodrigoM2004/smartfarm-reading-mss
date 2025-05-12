import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';

export default function PhPage() {

        const { setSelectedIndex } = useSidebar()
    
        useEffect(() => {
        setSelectedIndex(2)
      }, [setSelectedIndex])

    return <div className="w-full h-full flex items-center justify-center text-black text-5xl">PhPage</div>
}