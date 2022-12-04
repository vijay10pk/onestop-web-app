import React, { createContext, useState } from 'react';

export const ServicesContext = createContext();

const ServicesContextProvider = ({children,servicesList}) => {
//   const SERVICE_DATA = JSON.parse(localStorage.getItem('list'));
  const [services] = useState(servicesList);
    console.log("context"+servicesList)
  return (
    <ServicesContext.Provider value={{ services }}>
      { children }
    </ServicesContext.Provider>
  );
}

export default ServicesContextProvider;