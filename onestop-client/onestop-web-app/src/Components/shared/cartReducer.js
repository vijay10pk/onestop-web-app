export const cartReducer = (state,action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            if(!state.cartItems.find((item)=> item._id === action.payload._id)){
                state.cartItems.push({...action.payload,quantity:1})
            }
            return {
                ...state,
                cartItems:[...state.cartItems],
                itemCount: state.cartItems.reduce((total,service)=>{
                    return total + service.quantity
                },0),
                totalAmount: state.cartItems.reduce((total,service)=> {
                    return total + service.price*service.quantity
                },0)
            }
        
        case 'ADD_MORE':
        
            const index = state.cartItems.findIndex(item => item._id === action.payload._id)
            state.cartItems[index].quantity++
            return {
                ...state,
                cartItems:[...state.cartItems],
                itemCount: state.cartItems.reduce((total,service)=>{
                    return total + service.quantity
                },0),
                totalAmount: state.cartItems.reduce((total,service)=> {
                    return total + service.price*service.quantity
                },0)
            }    
        
        case 'DECREASE':
            const decindex = state.cartItems.findIndex(item => item._id === action.payload._id);
            const service = state.cartItems[decindex];
            if (service.quantity !== 0 && service.quantity !== 1) {
                service.quantity--;
            }
            return {
                ...state,
                cartItems:[...state.cartItems],
                itemCount: state.cartItems.reduce((total,service)=>{
                    return total + service.quantity
                },0),
                totalAmount: state.cartItems.reduce((total,service)=> {
                    return total + service.price*service.quantity
                },0)
            }    
        
        case 'REMOVE_ITEM':
            state.cartItems = state.cartItems.filter(item => item._id !== action.payload._id);
            return {
                ...state,
                itemCount: state.cartItems.reduce((total,service)=>{
                    return total + service.quantity
                },0),
                totalAmount: state.cartItems.reduce((total,service)=> {
                    return total + service.price*service.quantity
                },0)
            };  

        case 'CLEAR':
            return {
                cartItems: [],
                itemCount: 0,
                total: 0,
            }    
        default:
            return state;
    }
}