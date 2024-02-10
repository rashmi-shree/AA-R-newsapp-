import React from 'react'
import WelcomeNewCardList from './WelcomeNewCardList'
import IndiaNewCardList from './IndiaNewCardList'
import Weather from './Weather'
const Home = () => {
  return (
    <div className='mb-[20rem]'>
      <WelcomeNewCardList />
      <IndiaNewCardList />
      <Weather />
    </div>
  )
}

export default Home