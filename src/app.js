"use strict"

//REACT
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

//import combined reducers
import reducers from './reducers/index';

//import actions
import {addToCart} from './actions/cartActions'
import {postBooks, deleteBooks, updateBooks} from './actions/booksActions';

//step 1 create the store
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware);


import BooksList from './components/pages/booksList';
render(
  <Provider store={store}>
    <BooksList/>
  </Provider>, document.getElementById('app')
);

//step 2 create and dispatch actions
// store.dispatch(postBooks(

// ))

//dispatch a second action
// store.dispatch(deleteBooks(
//   {id: 1}
// ))

// //update a book
// store.dispatch(updateBooks(
//   {
//     id: 2,
//     title: 'Learn React in 24h'
//   }
// ))

// // CART ACTIONS!

// //ADD to cart
// store.dispatch(addToCart([{id: 1}]))