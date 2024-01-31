import React from 'react'
import Header from '../components/Header'
import SpecialMeals from '../components/SpecialMeals'
import Update from '../components/Update'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <div className='home'>
      <Header/>
      <SpecialMeals/>
      <Update/>
      <Footer/>
    </div>
  )
}

export default Home