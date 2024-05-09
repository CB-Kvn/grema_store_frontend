import { createSlice } from "@reduxjs/toolkit";
import { AddProductSelect, reducerInitialProductSelect, RemoveProductSelect, UpdateQuantyProductSelect } from "../../interfaces/shopcar_interface_gre_sto";


const initialState: reducerInitialProductSelect = {
    data: [] ,
    suma: 0,
    total: 0,
    envio_type: "",
    envio_price:0
}

export const SelectedSlice = createSlice({
    name: 'shopcar_gre_sto',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,

    reducers: {
        add_products_selected: (state, action: AddProductSelect) => {
            state.data.push(action.payload.data);

            const num = state.data.reduce((acumulador, producto) => {
                return acumulador + producto.quantyOrder!;
              }, 0);
            const total = state.data.reduce((acumulador, producto) => {
                return acumulador + ( producto.quantyOrder! * ( producto.precio - (producto.precio * ( producto.desc / 100))) );
              }, 0);
            
            state.suma = num
            state.total = total 
        },
        remove_products_selected: (state, action: RemoveProductSelect) => {
            state.data = state.data.filter(love => love.id !== action.payload.id.toString());
            const num = state.data.reduce((acumulador, producto) => {
                return acumulador + producto.quantyOrder!;
              }, 0);
            const total = state.data.reduce((acumulador, producto) => {
                return acumulador + ( producto.quantyOrder! * ( producto.precio - (producto.precio * ( producto.desc / 100))) );
              }, 0);
            
            state.suma = num
            state.total = total 
        },
        update_products_selected: (state, action: UpdateQuantyProductSelect) => {
            state.data = state.data.filter((love) => {
                if(love.id !== action.payload.id.toString()){
                    love.quantyInv = action.payload.quanty
                }
                });
        },

        update_carrier_selected:(state,action)=>{
            state.envio_type = action.payload.type
            state.envio_price = action.payload.price
        }

    },
})

export const { add_products_selected,remove_products_selected, update_products_selected,update_carrier_selected } = SelectedSlice.actions

export default SelectedSlice.reducer