export const cartCheck = (service, cartItems) => {
    return cartItems.find(item => item._id === service._id);
  }

export const quantityCheck = (service,cartItems) => {
    var count = 0
    cartItems.forEach((item,i )=> {
        if(item._id===service._id){
            count = cartItems[i].quantity
        }
    });
    return count
}  