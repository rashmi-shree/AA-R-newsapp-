import React from 'react'
import WelcomeNewCardList from './WelcomeNewCardList'
import IndiaNewCardList from './IndiaNewCardList'
const Home = () => {
  return (
    <div className='mb-10'>
      <WelcomeNewCardList />
      <IndiaNewCardList />
    </div>
  )
}

export default Home