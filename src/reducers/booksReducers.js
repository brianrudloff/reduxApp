"use strict"



//books reducers
export function booksReducers(state={
  books:
    [{
      id: 1,
      title: 'this is the book title',
      description: 'this is the book description',
      price: 43.33
  },
  {
      id: 2,
      title: 'this is the second book title',
      description: 'this is the second book description',
      price: 55,
  }]
}, action){
  switch(action.type){
    case "GET_BOOKS_BOOK":
    return {...state, books:[...state.books]}
    break;

    case "POST_BOOK":
    // let books = state.books.concat(action.payload);
    // return {books};
    return {books:[...state.books, ...action.payload]}
    break;
    
    case "DELETE_BOOK":
    //create a copy of the current array of books
    const currentBookToDelete = [...state.books]
    //determine at which index in books array is the book to be deleted
    const indexToDelete = currentBookToDelete.findIndex(
      function (book) {
        return book.id === action.payload.id;
      }
    )
    //use slice to remove the book at the specified index
    return {books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]}
    break;

    case "UPDATE_BOOK":
    //copy of a current array of books
    const currentBookToUpdate = [...state.books]
    //determine at which index in books array is the book to be deleted
    const indexToUpdate = currentBookToUpdate.findIndex(
      function(book){
        return book.id===action.payload.id;
      }
    )
    //creat a new book object with the new values and with the saem array index of the item we want to replace. to chieve this we will use spread but we could use concat methos too
    const newBookToUpdate = {
      ...currentBookToUpdate[indexToUpdate],
      title: action.payload.title
    }
    //this log has the purpose to show you how newBookToUpdate looks like
    console.log("what is it newBookToUpdate", newBookToUpdate);
    //use slice to remove the book at the specified inde, replace ith the new objeect and concatenate with the rest of the tiesm in the array
    return {books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]}
    break;
  }
  return state
}