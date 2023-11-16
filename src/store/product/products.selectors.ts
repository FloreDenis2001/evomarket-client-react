import { createSelector } from "@reduxjs/toolkit";
import { ProductState } from "./products.reducers";

interface RootState {
    productState: ProductState,
}

const selectProductState = (state: RootState) => state.productState;

export const selectProducts = createSelector(
    selectProductState,
    (productState?): typeof productState.products => productState.products
)

export const selectRetrieveProductState = createSelector(
    selectProductState,
    (productState?): typeof productState.retriveProductState => productState.retriveProductState
)

export const selectAddProductState = createSelector(
    selectProductState,
    (productState?): typeof productState.addProductState => productState.addProductState
)

