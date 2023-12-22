import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productSlice from './product/products.reducers';
import bagSlice from './bag/bag.reducers';
import thunk from 'redux-thunk';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

interface RootState {
    productsState: ReturnType<typeof productSlice>;
    bagState: ReturnType<typeof bagSlice>;
}

const rootReducer = combineReducers({
    productsState: productSlice,
    bagState: bagSlice,
});

const persistConfig = {
   key: 'root',
   version: 1,
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(thunk),
});

const persistor = persistStore(store);

export { store, persistor };