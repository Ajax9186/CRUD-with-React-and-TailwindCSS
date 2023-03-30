import { React, createContext, useContext, useState, useEffect } from "react";

const url = "http://localhost:3000";

const AppContext = createContext();

export function AppProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useAppContext = () => {
  return useContext(AppContext);
};
