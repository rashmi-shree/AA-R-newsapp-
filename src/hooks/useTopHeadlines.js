import {useEffect} from 'react'
import { TOP_HEADLINES_URL, NEW_API_KEY } from '../utils/constants'
import {useDispatch} from 'react-redux';
import {addTopHeadlines} from "../utils/topHeadlinesSlice";
const useTopHeadlines = () => {
    const dispatch = useDispatch()
    const fetchTopHeadLinesData = async () => {
        const data = await fetch(TOP_HEADLINES_URL+NEW_API_KEY)
        const json = await data.json()
        dispatch(addTopHeadlines(json?.articles))
    }
    useEffect(()=>{
        fetchTopHeadLinesData()
    },[])
   
}

export default useTopHeadlines