import { createSelector } from "@reduxjs/toolkit";
import { ProductState } from "./products.reducers";

interface RootState {
    productsState: ProductState,
}

const selectProductsState = (state: RootState) => state.productsState;

export const selectProducts = createSelector(
    selectProductsState,
    (productsState?): typeof productsState.products => productsState.products
)

export const selectRetrieveProductState = createSelector(
    selectProductsState,
    (productsState?): typeof productsState.retriveProductState => productsState.retriveProductState
)

export const selectAddProductState = createSelector(
    selectProductsState,
    (productsState?): typeof productsState.addProductState => productsState.addProductState
)
export const selectRemoveProductState = createSelector(
    selectProductsState,
    (productsState?): typeof productsState.removeProductState => productsState.removeProductState
)
export const selectUpdateProductState = createSelector(
    selectProductsState,
    (productsState?): typeof productsState.updateProductState => productsState.updateProductState
)

