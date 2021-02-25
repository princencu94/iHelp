export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.sn === cartItemToAdd.sn);

    if(existingCartItem) {
       return cartItems.map(cartItem => cartItem.sn === cartItemToAdd.sn
        ? {...cartItem, quantity: cartItem.quantity + 1} :
        cartItem)
    }
    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const removeItem = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.sn === cartItemToRemove.sn);

    if(existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.sn !== cartItemToRemove.sn);
    }

    return cartItems.map(cartItem =>
        cartItem.sn === cartItemToRemove.sn ?
        {...cartItem, quantity: cartItem.quantity -1} :
        cartItem
        );
}