import { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SidebarContext = createContext();

export function SidebarProvider({ children }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const location = useLocation();


  const pathToIndexMap = {
    '/dashboard/map': 0,
    '/dashboard/lum': 1,
    '/dashboard/ph': 2,
    '/dashboard/temp': 3,
    '/dashboard/bat': 4,
  };

  useEffect(() => {
    const matchedPath = Object.keys(pathToIndexMap).find(path => 
      location.pathname.includes(path)
    );
    
    if (matchedPath) {
      setSelectedIndex(pathToIndexMap[matchedPath]);
    }
  }, [location.pathname]);

  return (
    <SidebarContext.Provider value={{ selectedIndex, setSelectedIndex }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}