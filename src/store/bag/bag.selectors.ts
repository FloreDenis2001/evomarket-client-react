import { createSelector } from "@reduxjs/toolkit";
import { BagState } from "./bag.reducers";

interface RootState {
    bagState: BagState,
}


const selectBagState = (state: RootState) => state.bagState;

export const selectBag = createSelector(
    selectBagState,
    (bagState?): typeof bagState.products => bagState.products
)

export const selectRetrieveBagState = createSelector(
    selectBagState,
    (bagState?): typeof bagState.retriveBagState => bagState.retriveBagState
)

export const selectAddProductOnBagState = createSelector(
    selectBagState,
    (bagState?): typeof bagState.addProductOnBagState => bagState.addProductOnBagState
)

export const selectRemoveProductOnBagState = createSelector(
    selectBagState,
    (bagState?): typeof bagState.removeProductOnBagState => bagState.removeProductOnBagState
)

export const selectUpdateProductOnBagState = createSelector(
    selectBagState,
    (bagState?): typeof bagState.updateProductOnBagState => bagState.updateProductOnBagState
)

