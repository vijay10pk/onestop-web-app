import React from 'react'
import { useContext } from 'react'
import { ServicesContext } from './SubCategory'

const ServiceDetail = () => {

    const {services} = useContext(ServicesContext)

  return (
    <>
        {services.map(data=>{
            return(
                <div key={data._id} className='featured-product'>
                    <div className='name-price'>
                        <h3 style={{ textTransform: "capitalize" }} >{data.name}</h3>
                        <h5>{data.description}</h5>
                        <p>${data.price}</p>
                        <button className='btn2' >ADD TO CART</button>
                    </div>
                    <div>
                        <img className='featured-image' src={require(`../images/${data.image}`)} alt='product' />
                    </div>
                </div>
            )
        })}
    </>
  )
}

export default ServiceDetail