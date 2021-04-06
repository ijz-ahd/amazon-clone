import { React, createContext, useContext, useReducer } from "react";

//prepare dataLayer
export const StateContext = createContext();

//Data layer wrapper for components
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull data from dataLayer
export const useStateValue = () => useContext(StateContext);
