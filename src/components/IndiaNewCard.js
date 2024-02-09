import React from 'react'

const IndiaNewCard = (props) => {
    const {title,description,image} = props;
  return (
    <div className='p-10 m-5 w-[30rem] h-[24rem]'>
        
        <img 
            className='h-20 w-[30rem]'
            src={image}
            alt="Heading Image"
        />
        <div>
            <h1 className='font-bold text-l p-1'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>

    </div>
  )
}

export default IndiaNewCard