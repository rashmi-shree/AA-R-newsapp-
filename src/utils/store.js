import { configureStore } from "@reduxjs/toolkit";
import topHeadlinesReducer from "./topHeadlinesSlice";
const store = configureStore({
    reducer:{
        topHeadlines:topHeadlinesReducer
    }
})
export default store;