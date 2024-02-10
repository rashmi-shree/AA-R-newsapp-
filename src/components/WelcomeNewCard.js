import React from 'react'
import { Link } from 'react-router-dom';
const WelcomeNewCard = (props) => {
    const {title,image, tag, url} =props;
  return (
    <div className=' h-[20rem] p-4 m-6 w-[25rem]'>
        {
            image && 
            (
                <Link to={url}>
                <img 
                    className='size-full object-cover'
                    src={image}
                    alt="Headline Image"
                />
                <div className='relative top-0 left-0 mt-40 ml-4'>
                <h1 className='font-bold text-white text-xl'>{title}</h1>
                <p className='text-white mt-10  border-l border-red-600 pl-2'>{tag}</p>
                </div>
                </Link>
            )
        }
        
        
    </div>
  )
}

export default WelcomeNewCard