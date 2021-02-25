import { cartActionTypes } from './cart-types';
import { addItemToCart, removeItem } from './cart-utils';

const INITIAL_STATE = {
    toggleCart: false,
    cartItems:[]
}

const cartReducer = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.TOGGLE_CART:
            return {
                ...state,
                toggleCart:!state.toggleCart
            }
        case cartActionTypes.ADD_ITEM:
            return {
                ...state,
                cartItems:addItemToCart(state.cartItems, action.payload)
        }
        case cartActionTypes.REMOVE_ITEM:
            return {
                ...state,
                cartItems:removeItem(state.cartItems, action.payload)
        }
        case cartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter(cartItem => cartItem.sn !== action.payload.sn)
        }
        default:
         return state;
    }
}

export default cartReducer;