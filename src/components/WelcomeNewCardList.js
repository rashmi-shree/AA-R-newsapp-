import React from 'react'
import WelcomeNewCard from './WelcomeNewCard'
import useTopHeadlines from '../hooks/useTopHeadlines'
import { useSelector } from 'react-redux'

const WelcomeNewCardList = () => {
    const topHeadlines = useSelector((store)=> store?.Headlines?.topHeadlines)
    useTopHeadlines()
    
  return (
    <div className='ml-8 overflow-scroll'>
        <h1 className='ml-10 mt-10 font-bold text-xl border-l-4 border-red-500 p-2'>Welcome to AAR.com</h1>
            <div className='flex col-span-6 flex-wrap'>
            {
                topHeadlines?.map((data, index)=>
                <WelcomeNewCard 
                    key={index}
                    title={data?.title}
                    tag={data?.source?.name}
                    image={data?.urlToImage}
                    url={data?.url}
                />
                )
            }
            </div>
    </div>
  )
}

export default WelcomeNewCardList