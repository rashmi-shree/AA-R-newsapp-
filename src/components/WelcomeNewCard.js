import React from 'react'

const WelcomeNewCard = (props) => {
    const {title,image, tag} =props;
  return (
    <div className=' h-[20rem] p-4 m-6 w-[25rem]'>
        {
            image && 
            (
                <>
                <img 
            className='size-full object-cover'
            src={image}
            alt="Headline Image"
        />
        <div className='absolute top-0 left-0 mt-40 ml-4'>
        <h1 className='font-bold text-white text-xl'>{title}</h1>
        <p className='text-white mt-10  border-l border-red-600 pl-2'>{tag}</p>
        </div>
        </>
            )
        }
        
        
    </div>
  )
}

export default WelcomeNewCard