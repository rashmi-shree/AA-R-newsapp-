import React from 'react'
import useIndiaHeadlines from "../hooks/useIndiaHeadlines";
import IndiaNewCard from './IndiaNewCard';
import {useSelector} from 'react-redux';
import useIndiaSportsNews from '../hooks/useIndiaSportsNews';
const IndiaNewCardList = () => {
    const indiaHeadlines = useSelector((store)=> store?.Headlines?.indiaHeadlines)
    const indiaSportsNews = useSelector((store)=>store?.Headlines?.indiaSports)
    useIndiaHeadlines()
    useIndiaSportsNews()
  return (
    <div className='px-10'>
    <div className='p-2'>
        <h1 className='ml-6 mt-10 font-bold text-xl border-l-4 border-red-500 p-2'>India Headlines</h1>
        <div className='flex overflow-x-scroll ml-4 mt-6'>
        <div className='flex '>
            {
                indiaHeadlines?.map((data, index)=>
                <IndiaNewCard 
                    key={index}
                    title ={data?.title}
                    description ={data?.description}
                    image={data?.urlToImage}
                    url={data?.url}
                />
                )
            } 
            </div>
        </div>
    </div>
    <div className='p-2'>
        <h1 className='ml-6 mt-10 font-bold text-xl border-l-4 border-red-500 p-2'>India Sports</h1>
        <div className='flex overflow-x-scroll ml-4 mt-6'>
        <div className='flex '>
            {
                indiaSportsNews?.map((data, index)=>
                <IndiaNewCard 
                    key={index}
                    title ={data?.title}
                    description ={data?.description}
                    image={data?.urlToImage}
                    url={data?.url}
                />
                )
            } 
            </div>
        </div>
    </div>
    </div>
  )
}

export default IndiaNewCardList