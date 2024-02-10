import { createSlice } from "@reduxjs/toolkit";

const topHeadlinesSlice = createSlice({
    name:"Headlines",
    initialState:{
        topHeadlines:null,
        indiaHeadlines:null,
        indiaSports:null,
    },
    reducers:{
        addTopHeadlines:(state, action)=>{
            state.topHeadlines = action.payload
        },
        addIndiaHeadlines:(state, action)=>{
            state.indiaHeadlines = action.payload
        },
        addIndiaSports:(state, action)=>{
            state.indiaSports=action.payload
        },
    }
})
export const {addTopHeadlines, addIndiaHeadlines,addIndiaSports} = topHeadlinesSlice.actions;
export default topHeadlinesSlice.reducer;