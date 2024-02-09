import React, { useEffect } from 'react'
import { INDIA_HEADLINES,NEW_API_KEY } from '../utils/constants'
import {useDispatch} from 'react-redux'
import { addIndiaHeadlines } from '../utils/topHeadlinesSlice'

const useIndiaHeadlines = () => {
    const dispatch = useDispatch()
    const fetchIndiaHeadlines = async() =>{
        const data = await  fetch(INDIA_HEADLINES+NEW_API_KEY);
        const json = await data.json()
        dispatch(addIndiaHeadlines(json?.articles))
    }
    useEffect(()=>{
        fetchIndiaHeadlines()
    },[])
  
}

export default useIndiaHeadlines