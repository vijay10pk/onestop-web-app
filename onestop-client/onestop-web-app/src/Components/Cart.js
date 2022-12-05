import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../Context/CardContext';
import {FaPlusCircle, FaTrash, FaMinusCircle} from 'react-icons/fa';
import {BsFillCartXFill} from 'react-icons/bs'
import Card from './Card'

const Cart = () => {
    const {cartItems, totalAmount, itemCount, addMore, decrease, remove, clearCart} = useContext(CartContext)
    console.log(cartItems,totalAmount,itemCount)
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
                            <div className="name-price">
                            <div>
                                <h4>{item.name}</h4>
                                <p>{`Price: ${item.price}`}</p>
                            </div>
                            <div>
                                <p>{`Quantity: ${item.quantity}`}</p>
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
                        {console.log("i'm here")}
                        <div className='featured-product'>
                            <div className='empty-container'>
                                <BsFillCartXFill className='empty-cart-icon' ></BsFillCartXFill>
                                <h1 className='name-price' >Your Cart is Empty</h1>
                            </div>
                        </div>
                    </>
                )}
            </div>
            <div className="col-4">
                <Card >
                    <h3 style={{ display: "flex", justifyContent: "space-between" }}><span>Total:</span>  <i>${totalAmount?totalAmount.toFixed(2):0}</i></h3>
                    <h5 style={{ display: "flex", justifyContent: "space-between" }}><span>Services:</span>  <span>{itemCount ? itemCount:0}</span></h5>
                    <div className='checkout' >
                        <button className='btn2'>Proceed To Checkout</button>
                    </div>
                    <div className='checkout'>
                        <button onClick={clearCart} className='btn_checkout'>Clear Cart</button>
                    </div>
                </Card>
            </div>
        </div>

    );
}

export default Cart