/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { FiltersToApi } from "../../interfaces/filters_interface_gre_sto";


// Define the initial state using that type
const initialState: FiltersToApi = {
    dataFilter:{
        color:[],
        tam:[],
        forma:[],
        material:[],
        categoria:[]
    },
    dataSearch:{
        color:[],
        tam:[],
        forma:[],
        material:[],
        categoria:[]
    }
    
}

export const FiltersSlice = createSlice({
    name: 'filters_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_filtersSearch_color: (state, action) => {
            state.dataSearch.color.push(action.payload.color)
        },
        add_filtersSearch_tam: (state, action) => {
            state.dataSearch.tam.push(action.payload.tam)
        },
        add_filtersSearch_forma: (state, action) => {
            state.dataSearch.forma.push(action.payload.forma)
        },
        add_filtersSearch_material: (state, action) => {
            state.dataSearch.material.push(action.payload.material)
        },
        add_filtersSearch_categoria: (state, action) => {
            state.dataSearch.categoria.push(action.payload.categoria)
        },

        add_filters_list: (state, action) => {
            state.dataFilter.color = action.payload.color.map(((element:any)=>{return element.color}))
            state.dataFilter.tam  = action.payload.tam.map(((element:any)=>{return element.size}))
            state.dataFilter.forma = action.payload.forma.map(((element:any)=>{return element.shape}))
            state.dataFilter.material = action.payload.material.map(((element:any)=>{return element.material}))
            state.dataFilter.categoria = action.payload.categoria.map(((element:any)=>{return element.name}))
        },


    },
})

export const { add_filtersSearch_color,add_filtersSearch_tam,add_filtersSearch_forma,add_filtersSearch_material,add_filtersSearch_categoria,add_filters_list } = FiltersSlice.actions

export default FiltersSlice.reducer