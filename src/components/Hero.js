import React from 'react'
import food1 from '../assets/food1.png'
import google from '../assets/Google.png'
import apple from '../assets/Apple.png'

const Hero = () => {
  return (
    <section className='hero'>
    <div className='hero-content'>
     <h2>Order <span>food</span> anytime, anywhere</h2>
     <p>Browse from our list of specials to place your order and have food<br/>delivered to you in no time. Affordable, tasty and fast!</p>
       <div className='download-links'>
        <img src={google} alt='playstore'/>
        <img src={apple} alt='appstore'/>
     </div>
    </div>
     <div className='hero-img'>
     <img src={food1} alt='Hero' /> 
     </div>
    </section>

  )
}

export default Hero