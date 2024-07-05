import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

export const store = configureStore({
    reducer: {
        task: taskReducer
    }
})

//Define a field inside a reducer parameter. 