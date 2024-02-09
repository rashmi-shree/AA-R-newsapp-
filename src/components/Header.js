import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <div className='grid grid-cols-12 p-4 bg-black shadow-xl'>
      <div className='col-span-2 text-black mt-1'>
        <span className='text-xl font-bold bg-white p-2 m-2 '>A</span>
        <span className='text-xl font-bold bg-white p-2 mr-2'>A</span>
        <span className='text-xl font-bold bg-white p-2 '>R</span>
      </div>
      <div className='col-span-8 flex justify-evenly font-bold text-white mt-1'>
        <p>
          <Link to="/">Home</Link>
        </p>
        <p><Link to="/news">News</Link></p>
        <p><Link to="sports">Sport</Link></p>
      </div>
      <div className='col-span-2'>
        <input 
          className=" bg-gray-800 text-white p-2 mr-4"
          type='text'
          placeholder='Search AAR'
        />
      </div>
    </div>
  )
}

export default Header