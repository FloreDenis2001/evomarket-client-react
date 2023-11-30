import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { LoadingState } from "../../ActionTypes/LoadingState";
import ProductBag from "../../models/Product/ProductBag";

export interface BagState {
    products: ProductBag[],
    retriveBagState: LoadingState,
    addProductOnBagState: LoadingState,
    removeProductOnBagState: LoadingState,
    updateProductOnBagState: LoadingState,
}


const bagInitialState: BagState = {
    products: [],
    retriveBagState: LoadingState.NONE,
    addProductOnBagState: LoadingState.NONE,
    removeProductOnBagState: LoadingState.NONE,
    updateProductOnBagState: LoadingState.NONE,
}

const bagSlice = createSlice({
    name: "bag",
    initialState: bagInitialState,
    reducers: {
        loadBag(state, action: PayloadAction<ProductBag[]>) {
            state.products = action.payload
        },
        retriveBagLoading(state, action: PayloadAction<void>) {
            state.retriveBagState = LoadingState.LOADING;
        },
        retriveBagError(state, action: PayloadAction<void>) {
            state.retriveBagState = LoadingState.ERROR;
        },
        retriveBagSucces(state, action: PayloadAction<void>) {
            state.retriveBagState = LoadingState.SUCCES;
        },
        addProductOnBag(state, action: PayloadAction<ProductBag>) {
            const product = state.products.find(product => product.product.sku === action.payload.product.sku);
            if (product) {
                product.quantity += action.payload.quantity;
            } else {
                state.products.push(action.payload);
            }
        },
        addProductOnBagLoading(state, action: PayloadAction<void>) {
            state.addProductOnBagState = LoadingState.LOADING;
        },
        addProductOnBagError(state, action: PayloadAction<void>) {
            state.addProductOnBagState = LoadingState.ERROR;
        },
        addProductOnBagSucces(state, action: PayloadAction<void>) {
            state.addProductOnBagState = LoadingState.SUCCES;
        },
        removeProductOnBag(state, action: PayloadAction<ProductBag>) {
            const product = state.products.find(product => product.product.sku === action.payload.product.sku);
            if (product) {
                product.quantity -= action.payload.quantity;
                if (product.quantity <= 0) {
                    state.products = state.products.filter(product => product.product.sku !== action.payload.product.sku);
                }
            }
        },
        removeProductOnBagLoading(state, action: PayloadAction<void>) {
            state.removeProductOnBagState = LoadingState.LOADING;
        },
        removeProductOnBagError(state, action: PayloadAction<void>) {
            state.removeProductOnBagState = LoadingState.ERROR;
        },
        removeProductOnBagSucces(state, action: PayloadAction<void>) {
            state.removeProductOnBagState = LoadingState.SUCCES;
        },
        updateProductOnBag(state, action: PayloadAction<ProductBag>) {
            const product = state.products.find(product => product.product.sku === action.payload.product.sku);
            if (product) {
                product.quantity = action.payload.quantity;
            }
        },
        updateProductOnBagLoading(state, action: PayloadAction<void>) {
            state.updateProductOnBagState = LoadingState.LOADING;
        },
        updateProductOnBagError(state, action: PayloadAction<void>) {
            state.updateProductOnBagState = LoadingState.ERROR;
        },
        updateProductOnBagSucces(state, action: PayloadAction<void>) {
            state.updateProductOnBagState = LoadingState.SUCCES;
        },
        clearBag(state, action: PayloadAction<void>) {
            state.products = [];
        }
    }
});

export const { loadBag, retriveBagLoading, retriveBagSucces, retriveBagError,

    addProductOnBag, addProductOnBagLoading, addProductOnBagError, addProductOnBagSucces,

    removeProductOnBag, removeProductOnBagLoading, removeProductOnBagError, removeProductOnBagSucces,

    updateProductOnBag, updateProductOnBagLoading, updateProductOnBagError, updateProductOnBagSucces,

    clearBag
} = bagSlice.actions;

export default bagSlice.reducer;