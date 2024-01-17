import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <div className='logo'>
      <img src={logo} alt='Logo'/>
      <h2>Lillies</h2>
      </div> 
      <ul>
        <li><Link to='/' className='first'>Home</Link></li>
        <li><Link to='/login' className='second'>Login</Link></li>
        <li><Link to='/signup' className='btn'>Signup</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar