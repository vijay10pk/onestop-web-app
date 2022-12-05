import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CardContext';
import {FaPlusCircle, FaTrash, FaMinusCircle} from 'react-icons/fa';
import {BsFillCartXFill} from 'react-icons/bs'
import Card from './Card'
import Checkout from './Checkout'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const {cartItems, totalAmount, itemCount, addMore, decrease, remove, clearCart} = useContext(CartContext)
    const navigate = useNavigate();

    const checkOut = () => {
        if(localStorage.getItem('login')){
            navigate('/checkout')
            clearCart();
            

        }else{
            alert('Please login to continue');
            navigate('/login')
        }
        
    }

    return (
        <div className="row d-flex align-items-center">
            <div className="col-8">
                {itemCount!==0 ? (
                    <>
                        {cartItems.map((item) => {
                    return (
                        <div className='featured-product'>
                            <div>
                                <img  className='featured-image' src={require(`../images/${item.image}`)} alt='product' />
                            </div>
                            <div id='right-align' className="name-price">
                            <div>
                                <h4 style={{ textTransform: "capitalize" }} >{item.name}</h4>
                                <h5>{`Price: ${item.price}`}</h5>
                            </div>
                            <div>
                                <h6>{`Quantity: ${item.quantity}`}</h6>
                            </div>
                            <div className='btns-container'>
                                <button
                                    onClick={() => addMore(item)}
                                    className='sub_btn'
                                >
                                    <FaPlusCircle width='20px' />
                                </button>
                                {
                                    item.quantity === 1 &&
                                    <button
                                        onClick={() => remove(item)}
                                        className='sub_btn'
                                    >
                                        <FaTrash width='20px' />
                                    </button>
                                }
                                {
                                    item.quantity > 1 &&
                                    <button
                                        onClick={() => decrease(item)}
                                        className='sub_btn'
                                    >
                                        <FaMinusCircle width='20px' />
                                    </button>
                                }

                            </div>
                            </div>
                        </div>
                    )
                })}
                    </>
                ) : ( 
                    <>
                        <div className='featured-product'>
                            <div className='empty-container'>
                                <BsFillCartXFill className='empty-cart-icon' ></BsFillCartXFill>
                                <h1 className='name-price' >Your Cart is Empty</h1>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div id='total' className="col-4">
                <Card >
                    <h3 style={{ display: "flex", justifyContent: "space-between" }}><span>Total:</span>  <i>${totalAmount?totalAmount.toFixed(2):0}</i></h3>
                    <h5 style={{ display: "flex", justifyContent: "space-between" }}><span>Services:</span>  <span>{itemCount ? itemCount:0}</span></h5>
                    {itemCount> 0 && (
                        <>
                            <div className='checkout' >
                                <button onClick={checkOut} className='btn2'>Proceed To Checkout</button>
                            </div>
                            <div className='checkout'>
                                <button onClick={clearCart} className='btn_checkout'>Clear Cart</button>
                            </div>
                        </>
                    )}
                </Card>
            </div>
        </div>

    );
}

export default Cart