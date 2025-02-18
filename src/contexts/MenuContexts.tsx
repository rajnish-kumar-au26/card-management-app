import React, { createContext, useContext, useState, ReactNode } from "react";

interface MenuContextProps {
  menuName: string;
  setMenuName: (name: string) => void;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [menuName, setMenuName] = useState("Home");
  return (
    <MenuContext.Provider value={{ menuName, setMenuName }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};
