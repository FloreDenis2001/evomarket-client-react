import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../ActionTypes/LoadingState";
import Product from "../../models/Product/Product";


export interface ProductState {

    products: Product[],
    retriveProductState: LoadingState,
    addProductState: LoadingState
}


const productInitialState: ProductState = {
    products: [],
    retriveProductState: LoadingState.NONE,
    addProductState: LoadingState.NONE
}

const productSlice = createSlice({
    name: "load",
    initialState:productInitialState,
    reducers:{
       loadProducts(state,action:PayloadAction<Product[]>){
         state.products=action.payload
       },
       retriveProductsLoading(state,action:PayloadAction<void>){
        state.retriveProductState=LoadingState.LOADING;
       },
       retriveProductsError(state,action:PayloadAction<void>){
        state.retriveProductState=LoadingState.ERROR;
       },
       retriveProductsSucces(state,action:PayloadAction<void>){
        state.retriveProductState=LoadingState.SUCCES;
       }
    }



})
export const { loadProducts, retriveProductsError, retriveProductsLoading, retriveProductsSucces } = productSlice.actions;
export default productSlice.reducer;