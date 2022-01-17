import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./asynCall/UserSlice";
import CounterSlice from "./counter/CounterSlice";

export const store= configureStore({
    reducer: {
        counterSlice:CounterSlice,
        users: UserSlice,
    },
})