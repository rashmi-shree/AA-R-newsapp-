import  {useEffect} from 'react'
import { WEATHER_URL, WEATHER_API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addWeatherData} from "../utils/weatherSlice"

const useWeatherData = (locationData) => {
    const dispatch = useDispatch()
    
    const fetchWeatherData = async () =>{
        const data = await fetch(WEATHER_URL +"lat="+locationData?.lat+"&lon="+locationData?.lon+"&appid="+WEATHER_API_KEY )
        const json = await data.json()
        dispatch(addWeatherData(json?.list?.slice(0,5)))
    }
    useEffect(()=>{
        fetchWeatherData()
    },[locationData])
}

export default useWeatherData