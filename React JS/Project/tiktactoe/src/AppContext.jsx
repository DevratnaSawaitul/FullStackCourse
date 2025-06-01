import { createContext, useState } from "react";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [isActive, setIsActive] = useState(false);
  const [userChoice, setUserChoice] = useState("O");

  return (
    <AppContext.Provider
      value={{ isActive, setIsActive, userChoice, setUserChoice }}
    >
      {children}
    </AppContext.Provider>
  );
}
