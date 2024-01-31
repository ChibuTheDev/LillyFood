import React from 'react'
import play from '../assets/Google.png'
import apple from '../assets/Apple.png'

const Footer = () => {
  return (
    <section className='footer'>

    <div>
    <h2>Company</h2>
    <ul>
        <li>Careers</li>
        <li>Contact Us</li>
        <li>About Us</li>
    </ul>
    </div>

    <div>
    <h2>Support</h2>
    <ul> 
        <li>Help Center</li>
        <li>Safety Center</li>
        
    </ul>
    </div>

   <div>
   <h2>Legal </h2>
    <ul>
        <li>Cookies Service</li>
        <li>Privacy Policy</li>
        <li>Terms Of Service</li>
        <li>Dispute Resolution</li>
    </ul>
    </div>
    <div>
    <h2> Install App </h2>
    <ul style={{paddingTop:'1.5rem'}}>
        <li><img src={play} alt='Playstore'/> </li>
        <li> <img src={apple} alt='AppStore'/> </li>
   
    </ul>
    </div>



    </section>
  )
}

export default Footer