"use strict"

//add to cart
export function addToCart(book) {
  return {
    type: 'ADD_TO_CART',
    payload: book,
  }
}