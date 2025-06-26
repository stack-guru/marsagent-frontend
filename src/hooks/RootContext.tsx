import React, { createContext, useContext, useState } from "react";

interface RootContextType {
  sideOpen: boolean;
  toggleSideOpen: () => void;
}

const RootContext = createContext<RootContextType | undefined>(undefined);

interface RootProviderProps {
  children: React.ReactNode;
}

export const RootProvider: React.FC<RootProviderProps> = ({
  children,
}) => {
  const [sideOpen, setSideOpen] = useState(false);

  const toggleSideOpen = () => {
    setSideOpen((prev) => !prev);
  };

  return (
    <RootContext.Provider
      value={{
        sideOpen,
        toggleSideOpen
      }}>
        {children}
    </RootContext.Provider>
  );
};

export const useRoot = () => {
  const context = useContext(RootContext);
  if (!context) {
    throw new Error("useRoot must be used within a RootProvider");
  }
  return context;
};
