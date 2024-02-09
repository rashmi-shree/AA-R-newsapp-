import React from 'react'
import useIndiaHeadlines from "../hooks/useIndiaHeadlines";
import IndiaNewCard from './IndiaNewCard';
import {useSelector} from 'react-redux';

const IndiaNewCardList = () => {
    const indiaHeadlines = useSelector((store)=> store?.topHeadlines?.indiaHeadlines)
    
    useIndiaHeadlines()
  return (
    <div>
        <h1 className='ml-10 mt-10 font-bold text-xl'>India Headlines</h1>
        <div className='flex overflow-scroll'>
            
            {
                indiaHeadlines?.map((data, index)=>
                <IndiaNewCard 
                    title ={data.title}
                    description ={data.description}
                    image={data.urlToImage}
                />
                )
            }
        </div>
    </div>
  )
}

export default IndiaNewCardList