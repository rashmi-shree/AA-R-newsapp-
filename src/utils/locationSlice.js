import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
    name:"location",
    initialState:{
        locationData:null,
    },
    reducers:{
        addLocationData:(state, action)=>{
            state.locationData=action.payload
        }
    }
})
export const {addLocationData}=locationSlice.actions;
export default locationSlice.reducer;