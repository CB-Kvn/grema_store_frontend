
import { createSlice } from "@reduxjs/toolkit";
import {ArrayParseProducts, ProductSelect, reducerInitialProducts } from "../../interfaces/products_interface_gre_sto";

interface addProducts {
    payload: {
        data: ArrayParseProducts[]
    }
}
interface ProductSelected {
    payload:{
        data:ProductSelect
    }
}

// Define the initial state using that type
const initialState: reducerInitialProducts = {
    dataProducts: [],
    dataSelected: null 
    
}

export const ProductSlice = createSlice({
    name: 'product_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_products_store: (state, action: addProducts) => {
            state.dataProducts = action.payload.data
        },
        update_products_filters_store: (state, action: addProducts) => {
            state.dataProducts = action.payload.data
        },
        selected_product:(state,action:ProductSelected)=>{
            state.dataSelected = action.payload.data
        }

    },
})

export const { add_products_store,update_products_filters_store,selected_product } = ProductSlice.actions

export default ProductSlice.reducer