import { createSlice } from "@reduxjs/toolkit";

const topHeadlinesSlice = createSlice({
    name:"Headlines",
    initialState:{
        topHeadlines:null,
        indiaHeadlines:null,
    },
    reducers:{
        addTopHeadlines:(state, action)=>{
            state.topHeadlines = action.payload
        },
        addIndiaHeadlines:(state, action)=>{
            state.indiaHeadlines = action.payload
        }
    }
})
export const {addTopHeadlines, addIndiaHeadlines} = topHeadlinesSlice.actions;
export default topHeadlinesSlice.reducer;