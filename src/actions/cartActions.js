"use strict"

//add to cart
export function addToCart(book) {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  }
}
// delete cart item
export function deleteCartItem(cart) {
  return {
    type: 'DELETE_CART_ITEM',
    payload: cart,
  }
}