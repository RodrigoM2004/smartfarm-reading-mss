import { useSidebar } from '../../utils/contexts/SidebarContext';
import { useEffect } from 'react';

export default function BateryPage() {

        const { setSelectedIndex } = useSidebar()
    
        useEffect(() => {
        setSelectedIndex(4)
      }, [setSelectedIndex])

    return <div className="w-full h-full flex items-center justify-center text-black text-5xl">BateryPage</div>
}