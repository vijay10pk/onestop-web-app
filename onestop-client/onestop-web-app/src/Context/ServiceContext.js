import React, { createContext, useState } from 'react';

export const ServicesContext = createContext();

// const data1 = JSON.parse(localStorage.getItem('data'))

const ServicesContextProvider = ({children}) => {

  const [services,setServices] = useState([])
  const [data,setData] = useState('')

  const addServices = (service) => {
    console.log(service)
    setServices(service)
  }

  const addData = (data1) => {
    setData(data1)
  }

  const delData = () =>{
    setData('')
  }

  const values = {data,services,addServices,delData,addData}

  return (
    <ServicesContext.Provider value={values}>
      { children }
    </ServicesContext.Provider>
  );
}

export default ServicesContextProvider;