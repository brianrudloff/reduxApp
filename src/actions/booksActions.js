"use strict"

// get books
export function getBooks(){
  return {
    type:"GET_BOOKS_BOOK"
  }
}

// post book
export function postBooks(book){
  return {
    type:"POST_BOOK",
    payload: book
  }
}

//delete a book
export function deleteBooks(id){
  return {
  type:"DELETE_BOOK",
  payload: id
  }
}

//update a book
export function updateBooks(book){
  return {
    type:"UPDATE_BOOK",
    payload:book
  }
}