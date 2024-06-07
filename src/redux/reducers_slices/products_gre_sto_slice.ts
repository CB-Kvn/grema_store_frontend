
import { createSlice } from "@reduxjs/toolkit";
import {ArrayParseProducts, reducerInitialProducts } from "../../interfaces/products_interface_gre_sto";

interface addProducts {
    payload: {
        data: ArrayParseProducts[]
    }
}


// Define the initial state using that type
const initialState: reducerInitialProducts = {
    dataProducts: [],
    dataSelected: {
        id:"",
        userId:"",
        productId: 0,
        nombre:"",
        precio:0,
        quantyInv:0,
        desc:0,
        description:"",
        images:[],
        quantyOrder:0,
        type:"",
        color: "",
        shape: "",
        category: "",
    },
    dataShowProducts:{}
    
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
        selected_product:(state,action)=>{
            state.dataSelected = action.payload.data
        },
        show_products_landing:(state,action)=>{
            state.dataShowProducts = action.payload.data
        }

    },
})

export const { add_products_store,update_products_filters_store,selected_product,show_products_landing } = ProductSlice.actions

export default ProductSlice.reducer