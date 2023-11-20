import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../ActionTypes/LoadingState";
import Product from "../../models/Product/Product";


export interface ProductState {
    products: Product[],
    retriveProductState: LoadingState,
    addProductState: LoadingState,
    removeProductState:LoadingState,
    updateProductState:LoadingState,
}


const productInitialState: ProductState = {
    products: [],
    retriveProductState: LoadingState.NONE,
    addProductState: LoadingState.NONE,
    removeProductState:LoadingState.NONE,
    updateProductState:LoadingState.NONE
}

const productSlice = createSlice({
    name: "load",
    initialState: productInitialState,
    reducers: {
        loadProducts(state, action: PayloadAction<Product[]>) {
            state.products = action.payload
        },
        retriveProductsLoading(state, action: PayloadAction<void>) {
            state.retriveProductState = LoadingState.LOADING;
        },
        retriveProductsError(state, action: PayloadAction<void>) {
            state.retriveProductState = LoadingState.ERROR;
        },
        retriveProductsSucces(state, action: PayloadAction<void>) {
            state.retriveProductState = LoadingState.SUCCES;
        },
        addProduct(state,action:PayloadAction<Product>){
            state.products.push(action.payload);
        },
        addProductLoading(state,action:PayloadAction<void>){
            state.addProductState = LoadingState.LOADING;
        },
        addProductError(state,action:PayloadAction<void>){
            state.addProductState = LoadingState.ERROR;
        },
        addProductSucces(state,action:PayloadAction<void>){
            state.addProductState = LoadingState.SUCCES;
        },
        removeProduct(state,action:PayloadAction<Product>){
            state.products = state.products.filter(product => product.sku !== action.payload.sku);
        },
        removeProductLoading(state,action:PayloadAction<void>){
            state.removeProductState = LoadingState.LOADING;
        },
        removeProductError(state,action:PayloadAction<void>){
            state.removeProductState = LoadingState.ERROR;
        },
        removeProductSucces(state,action:PayloadAction<void>){
            state.removeProductState = LoadingState.SUCCES;
        },
        updateProduct(state,action:PayloadAction<Product>){
            state.products = state.products.map(product => product.sku === action.payload.sku ? action.payload : product);
        },
        updateProductLoading(state,action:PayloadAction<void>){
            state.updateProductState = LoadingState.LOADING;
        },
        updateProductError(state,action:PayloadAction<void>){
            state.updateProductState = LoadingState.ERROR;
        },
        updateProductSucces(state,action:PayloadAction<void>){
            state.updateProductState = LoadingState.SUCCES;
        },
    }



})
export const { loadProducts, retriveProductsError, retriveProductsLoading, retriveProductsSucces ,addProduct,addProductError,addProductLoading,addProductSucces,updateProduct,updateProductError,updateProductLoading,updateProductSucces,removeProduct,removeProductError,removeProductLoading,removeProductSucces} = productSlice.actions;
export default productSlice.reducer;