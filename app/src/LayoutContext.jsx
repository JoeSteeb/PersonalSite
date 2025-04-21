import { createContext, useContext, useState } from "react";

const LayoutContext = createContext();

export const LayoutProvider = ({ children }) => {
  const [sharedLayout, setSharedLayout] = useState("");

  return (
    <LayoutContext.Provider value={{ sharedLayout, setSharedLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
