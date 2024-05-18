/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice } from "@reduxjs/toolkit";
import { FiltersTo } from "../../interfaces/filters_interface_gre_sto";


// Define the initial state using that type
const initialState: FiltersTo = {
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
        
        add_filter: (state, action) => {

        
            switch (action.payload.filter) {
                case "color":
                    state.dataSearch["color"].push(action.payload.color)
                    break;
                    case "tam":
                        state.dataSearch["tam"].push(action.payload.tam)
                    break;
            
                    case "forma":
                        state.dataSearch["forma"].push(action.payload.forma)
                    break;
            
                    case "material":
                        state.dataSearch["material"].push(action.payload.material)
                    break;
                    case "categoria":
                        state.dataSearch["categoria"].push(action.payload.categoria)
                    break;
            
            
                default:
                    break;
            }


        },
        remove_filter: (state, action) => {

        
            switch (action.payload.filter) {
                case "color":
                    state.dataSearch["color"].filter((filter) => filter !== action.payload.name);
                    break;
                    case "tam":
                        state.dataSearch["tam"].filter((filter) => filter !== action.payload.name);
                    break;
            
                    case "forma":
                        state.dataSearch["forma"].filter((filter) => filter !== action.payload.name);
                    break;
            
                    case "material":
                        state.dataSearch["material"].filter((filter) => filter !== action.payload.name);
                    break;
                    case "categoria":
                        state.dataSearch["categoria"].filter((filter) => filter !== action.payload.name); 
                    break;
            
            
                default:
                    break;
            }


        }



        ,
        add_filters_list: (state, action) => {
            state.dataFilter.color = action.payload.color.map(((element:any)=>{return element.color}))
            state.dataFilter.tam  = action.payload.tam.map(((element:any)=>{return element.size}))
            state.dataFilter.forma = action.payload.forma.map(((element:any)=>{return element.shape}))
            state.dataFilter.material = action.payload.material.map(((element:any)=>{return element.material}))
            state.dataFilter.categoria = action.payload.categoria.map(((element:any)=>{return element.name}))
        },


    },
})

export const { add_filters_list,add_filter } = FiltersSlice.actions

export default FiltersSlice.reducer