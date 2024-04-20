
import { createSlice } from "@reduxjs/toolkit";
import { FiltersFront } from "../../interfaces/filters_interface_gre_sto";
interface addFilters {
    payload: {
        data: FiltersFront
    }
}

// Define the initial state using that type
const initialState: FiltersFront = {
    filters: []
    
}

export const FiltersSlice = createSlice({
    name: 'filters_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_filters_store: (state, action: addFilters) => {
            state.filters = action.payload.data.filters
        },


    },
})

export const { add_filters_store } = FiltersSlice.actions

export default FiltersSlice.reducer