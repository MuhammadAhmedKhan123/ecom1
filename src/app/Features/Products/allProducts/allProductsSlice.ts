import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { Product } from "../allProducts/allProductsFetch";


export interface ProductState {
        products:{ [id:string]:Product }
}

const initialState: ProductState = {
    products: {}
}

const productsSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        receivedProducts(state, action:PayloadAction<Product[]>){
            const products = action.payload;
            products.forEach(product=>{
                state.products[product._id] = product;
            })
        }
    },
});

export const{receivedProducts} = productsSlice.actions; 
export default productsSlice.reducer;
