// NavigationLeftBarContext.tsx
import React, { createContext, useContext, useState } from "react";

interface NavigationLeftBarContextProps {
  isOpen: boolean;
  toggleLeftBar: () => void;
}

const NavigationLeftBarContext = createContext<NavigationLeftBarContextProps | undefined>(undefined);

export const useNavigationLeftBar = (): NavigationLeftBarContextProps => {
  const context = useContext(NavigationLeftBarContext);

  if (!context) {
    throw new Error("useNavigationLeftBar must be used within a NavigationLeftBarProvider");
  }

  return context;
};

interface NavigationLeftBarProviderProps {
  children: any 
}

export const NavigationLeftBarProvider: React.FC<NavigationLeftBarProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleLeftBar = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <NavigationLeftBarContext.Provider value={{ isOpen, toggleLeftBar }}>
      {children}
    </NavigationLeftBarContext.Provider>
  );
};
