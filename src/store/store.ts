import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import productSlice from './product/products.reducers'
import thunk from 'redux-thunk';

const store = configureStore({
    reducer: {
        productsState: productSlice,
    }, middleware: [thunk], 
});

export default store


