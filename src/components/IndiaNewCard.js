import React from 'react'
import { Link } from 'react-router-dom';
const IndiaNewCard = (props) => {
    const {title,description,image, url} = props;
    
  return (
    
    <div className=' w-[100rem] md:w-40 p-2 m-4'>
        <Link to={url} >
        <img 
            src={image}
            alt="Heading Image"
        />
        
        <div>
            <h1 className='font-bold text-l p-1'>{title}</h1> 
            <p className='text-gray-500'>{description}</p>
        </div>
        </Link>
    </div>
    
  )
}

export default IndiaNewCard