import React, { createContext, useContext } from "react";

const Context = createContext<null>(null);

interface props {
  children: JSX.Element;
}

export const MainContext = ({ children }: props) => {
  return <Context.Provider value={null}>{children}</Context.Provider>;
};

export const useMainContext = () => useContext(Context);
