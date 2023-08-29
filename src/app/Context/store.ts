
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../Features/Cart/cartSlice'
import {createWrapper} from"next-redux-wrapper"
import productsReducer from '../Features/Products/allProducts/allProductsSlice'
import { type } from "os";

export const  store = configureStore({
    reducer:{
        cart:cartReducer,
        products:productsReducer,
    }
});

// export const wrapper = createWrapper<Store<State>>(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;