import React, { createContext } from 'react';
import { useReducer } from 'react';
import { cartReducer } from '../Components/shared/cartReducer';

export const CartContext = createContext();

const initialState = { cartItems: [], itemCount: 0, totalAmount: 0 }

const CartContextProvider = ({children}) => {

const [state,dispatch] = useReducer(cartReducer,initialState)

const addToCart = (payload) => {
    dispatch({type: 'ADD_ITEM',payload})
}

const addMore = (payload) => {
    dispatch({type: 'ADD_MORE', payload})
}

const decrease = payload => {
    dispatch({type: 'DECREASE', payload});
  }

const remove = payload => {
    dispatch({type: 'REMOVE_ITEM', payload})
} 

const clearCart = () => {
    dispatch({type: 'CLEAR'});
}

const values = {...state,addToCart,addMore,decrease,remove,clearCart}

  return (
    <CartContext.Provider value={values} >
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider

