
import { createSlice } from "@reduxjs/toolkit";
import { AddLove,reducerInitialLove, RemoveLove } from "../../interfaces/lovin_interface_gre_sto";


// Define the initial state using that type
const initialState: reducerInitialLove = {
    data: [], 
    user: ''
}

export const LoveSlice = createSlice({
    name: 'love_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_products_love: (state, action: AddLove) => {
            state.data.push(action.payload.data);
            state.user = action.payload.user

        },
        remove_products_love: (state, action: RemoveLove) => {
            state.data = state.data.filter(love => love.productId !== action.payload.id);
        },


    },
})

export const { add_products_love,remove_products_love } = LoveSlice.actions

export default LoveSlice.reducer