import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
    name:"weather",
    initialState:{
        weatherData:null,
    },
    reducers:{
        addWeatherData:(state, action)=>{
            state.weatherData = action.payload
        }
    }
})
export const {addWeatherData} = weatherSlice.actions
export default weatherSlice.reducer;