import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

// import { RxHamburgerMenu } from "react-icons/rx";
// import Side  from './side/Sidebar.js'
// import { IoClose } from "react-icons/io5";

// import { useState } from 'react';
import Sidebar from "../components/side/Sidebar"

const NavBar = () => {

  // const [isOpen, setIsOpen] = useState(false)

  // function handleClick(){
  //   setIsOpen(true)
  //   console.log(isOpen);
  // }
 

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
      
      <Sidebar/>
     
    </nav>
  )
}








































export default NavBar