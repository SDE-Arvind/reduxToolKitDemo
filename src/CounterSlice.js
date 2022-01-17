import { createSlice } from "@reduxjs/toolkit";

const CounterSlice= createSlice({
    name:'counterState',
    initialState:{counter:0},
    reducers:{
        increment(state, action){
            const {counter} = state
            state.counter = counter+1
        },

        decrement(state, action){
            const {counter} = state
            state.counter = counter-1
        }    
    }
})

export const {increment, decrement} = CounterSlice.actions
export default CounterSlice.reducer