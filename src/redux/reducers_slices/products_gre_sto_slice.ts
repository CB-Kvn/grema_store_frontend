import { createSlice } from "@reduxjs/toolkit"
import {reducerInitial, ArrayParseProducts } from "../../interfaces/products_interface_gre_sto";
interface addProducts {
    payload: {
        data: ArrayParseProducts[]
    }
}

// Define the initial state using that type
const initialState: reducerInitial = {
    data: [] 
    
}

export const ProductSlice = createSlice({
    name: 'product_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_products_store: (state, action: addProducts) => {
            state.data = action.payload.data
        },
        update_products_filters_store: (state, action: addProducts) => {
            state.data = action.payload.data
        },


    },
})

export const { add_products_store,update_products_filters_store } = ProductSlice.actions

export default ProductSlice.reducer