import { createSelector } from 'reselect';

const selectCart = state => state.cart;

export const selectToggleHidden = createSelector(
    [selectCart],
    (cart) => cart.toggleHidden
)

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity, 0)
)