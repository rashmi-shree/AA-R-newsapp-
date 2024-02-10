import { configureStore } from "@reduxjs/toolkit";
import topHeadlinesReducer from "./topHeadlinesSlice";
import weatherReducer from "./weatherSlice";
import locationReducer from "./locationSlice";
const store = configureStore({
    reducer:{
        Headlines:topHeadlinesReducer,
        weather:weatherReducer,
        location:locationReducer,
    }
})
export default store;