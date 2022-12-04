import React, { Fragment } from 'react'
import { useState,createContext } from 'react';
import {useNavigate} from 'react-router-dom'
import ServiceDetail from './ServiceDetail';

export const ServicesContext = createContext();

const SubCategory = ({data,clear}) => {

    const navigate = useNavigate()
    const [services,setServices] = useState('')

    const handleClick = (dataService) => {
        setServices(dataService)
    }

    const backClick = () => {
        clear()
        navigate('/service', {replace: true})
    }

    if(services!==""){
        return (
            <ServicesContext.Provider value={{ services }}>
              <ServiceDetail></ServiceDetail>
            </ServicesContext.Provider>
          );
    }
 
    return (
        <Fragment>
            <div style={ {textAlign: "center" } } >
                <div className='sub'>
                    {data.map((sub,index) => {
                        return (
                            <>
                                <div key={index} onClick={()=>{
                                    let data = sub.services
                                    handleClick(data)
                                }} className='sub_card' >
                                   <h2 style={{ textTransform: "capitalize" }} >{sub.subCategoryName}</h2>
                                </div>
                            </>
                        )
                    })}
                </div>
                <button className='sub_btn' onClick={backClick}>GO BACK</button>
            </div>
        </Fragment>
      )
}

export default SubCategory
