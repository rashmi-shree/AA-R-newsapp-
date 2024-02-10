import React, { useRef, useState } from 'react'
import useWeatherData from '../hooks/useWeatherData'
import { useSelector } from 'react-redux'
import useLocationData from '../hooks/useLocationData'
const Weather = () => {
    const [searchText, setSearchText] = useState("Bangalore");
    const weatherData = useSelector((store)=> store?.weather?.weatherData)
    const locationData = useSelector((store)=> store?.location?.locationData)
    
    const inputText = useRef(null);
    useWeatherData(locationData)
    useLocationData(searchText)
    const callHookEvent = () => {
        setSearchText(inputText?.current?.value)
    }
  return (
    <div className='ml-8'>
        <h1 className='ml-10 mt-10 font-bold text-xl border-l-4 border-red-500 p-2'>
            {locationData?.name} Weather</h1>
        <form className='ml-10 mt-4'
         onSubmit={(e)=>e.preventDefault()}
         >
        <input 
            ref={inputText}
            className='border border-gray-300'
            type='text'
            placeholder='Enter city'
        />
        <button className='bg-gray-200 p-1 m-1 rounded-lg font-bold hover:bg-opacity-80'
            onClick={callHookEvent}
        >Search</button>
        </form>
        <div className='flex'>
        {
            weatherData?.map((data)=>
                <div className='ml-10 mt-4' key={data?.dt}>
                    <div>
                    <h3 className='font-bold text-lg'>{data?.dt_txt}</h3>
                    </div>
                    <div>
                    <p>Temperature: {data?.main?.temp}  &#8451;</p>
                    <p>Humidity: {data?.main?.humidity}%</p>
                    </div>
                </div>    
            )
        }
        </div>
    </div>
  )
}

export default Weather