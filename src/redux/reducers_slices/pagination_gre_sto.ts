// features/counter/counterSlice.ts
import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  value: number
  top: number
}

const initialState: CounterState = {
  value: 1,
  top:1,
};

export const PaginationSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      
        if(state.value != (state.top)){
            state.value += 1;
        }
      
    },
    decrement(state) {
      
        if(state.value != (1)){
            state.value -= 1;
        }
      
    },
    set_top_num : (state, action)=>{
        state.top = action.payload.num
    },
    reset_pagination(state,action) {
      state.value = Number(action.payload.value);
    },
    

    
  }
});

export const { increment, decrement,reset_pagination, set_top_num} = PaginationSlice.actions;

export default PaginationSlice.reducer;