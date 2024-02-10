import { useEffect } from 'react'
import { LAT_LON_URL, WEATHER_API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addLocationData } from '../utils/locationSlice'

const useLocationData = (searchText) => {
    const dispatch = useDispatch();    
    const fetchLocationData = async () => {
        const data = await fetch(LAT_LON_URL+"q="+searchText+"&limit=5&appid="+WEATHER_API_KEY)
        const json = await data.json()
        dispatch(addLocationData(json[0]))
    }
    useEffect(()=>{
        fetchLocationData()
    },[searchText])
}

export default useLocationData