import React from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { ServicesContext } from '../Context/ServiceContext'
import {CartContext} from '../Context/CardContext'
import { cartCheck, quantityCheck } from './shared/cartCheck'

const ServiceDetail = () => {

    const {services} = useContext(ServicesContext)
    const {addToCart,cartItems,addMore} = useContext(CartContext)
    console.log(services)
    
    const navigate = useNavigate();

    const backClick = () => {
        navigate('/sub',{replace:true})
    }

    const goCart = () => {
        navigate('/cart',)
    }

  return (
    <div className='detail' >
        <div>
        <button className='sub_btn' onClick={backClick}>GO BACK</button>
        </div>
          <div className='list' >
              {services.map(data => {
                  return (
                      <div key={data._id} className='featured-product'>
                          <div className='name-price'>
                              <h3 style={{ textTransform: "capitalize" }} >{data.name}</h3>
                              <h5>{data.description}</h5>
                              <p>${data.price}</p>
                              {!cartCheck(data, cartItems) && <button onClick={() => addToCart(data)} className='btn2' >ADD TO CART</button>}
                              {cartCheck(data, cartItems) && <button onClick={() => {
                                  console.log("i'm ")
                                  addMore(data)
                              }} className='btn3' >ADD MORE</button>}
                              <h4>QTY:{quantityCheck(data, cartItems)}</h4>
                          </div>
                          <div>
                              <img className='featured-image' src={require(`../images/${data.image}`)} alt='product' />
                          </div>
                      </div>
                  )
              })}
          </div>
        <div>
            <button className='sub_btn' onClick={goCart}>Go To Cart</button>
        </div>
    </div>
  )
}

export default ServiceDetail
