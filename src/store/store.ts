import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/products.reducers'
import bagSlice from './bag/bag.reducers'
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        productsState: productSlice,
        bagState:bagSlice,
    }, middleware: [thunk], 
});

export default store


