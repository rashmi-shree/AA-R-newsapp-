import React, {useEffect} from 'react'
import { INDIA_SPORTS_URL, NEW_API_KEY } from '../utils/constants'
import { useDispatch } from 'react-redux'
import {addIndiaSports} from "../utils/topHeadlinesSlice"

const useIndiaSportsNews = () => {
    const dispatch = useDispatch()
    const fetchSportsData = async () => {
        let data = await fetch(INDIA_SPORTS_URL+NEW_API_KEY)
        let json = await data.json()
        dispatch(addIndiaSports(json?.articles))
    }
    useEffect(()=>{
        fetchSportsData()
    },[])
  return (
    <div>useIndiaSportsNews</div>
  )
}

export default useIndiaSportsNews