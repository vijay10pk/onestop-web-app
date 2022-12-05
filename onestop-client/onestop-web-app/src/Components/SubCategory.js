import React, { Fragment } from 'react'
import { useContext } from 'react';
import {useNavigate} from 'react-router-dom'
import { ServicesContext } from '../Context/ServiceContext';
import ServiceList from './ServiceList';

const SubCategory = () => {

    const navigate = useNavigate()
    // const [services,setServices] = useState('')
    const {data,addServices,delData} = useContext(ServicesContext)

    const handleClick = (service) => {
        addServices(service)
        navigate('/detail', {replace: true})
    }

    const backClick = () => {
        localStorage.removeItem('data')
        delData();
        navigate('/service', {replace: true})
    }

    if(!data){
        return <ServiceList></ServiceList>
    }
 
    return (
        <Fragment>
            <div className="authentication-container">
            <div style={ {textAlign: "center" } } >
                <div className='sub'>
                    {data.map((sub,index) => {
                        return (
                            <>
                                <div key={index} onClick={()=> handleClick(sub.services)} className='sub_card' >
                                   <h2 style={{ textTransform: "capitalize" }} >{sub.subCategoryName}</h2>
                                </div>
                            </>
                        )
                    })}
                </div>
                <button className='sub_btn' onClick={backClick}>GO BACK</button>
            </div>
            </div>
        </Fragment>
      )
}

export default SubCategory
