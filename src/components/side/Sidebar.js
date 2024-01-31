import { useState } from 'react';
import '../side/sidebar.css'
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

function Sidebar (){


const [isClicked,setIsClicked] = useState(false)

function clickClose (){
    setIsClicked(!isClicked)
}

console.log(isClicked)

return(  
    <>
    {/* Using state to handle the hamburger menu.  */}
    <div className={isClicked=== false ? "closebtn" : 'side'}>
    
    {/* {isOpen && <Sidebar/>} */}
    <IoClose size={35}  style={{position: 'fixed', top:'0', right:'10', color:'#fff'}} onClick={()=>clickClose()}/>

    <ul className='sidebar-layout'>
    <li className='home' >Home</li>
    <li>Login</li>
    <li className='btn'>Signup</li> 

   

    </ul>
    </div>
   
   <RxHamburgerMenu onClick={()=>clickClose()}  color='#fff' size={35}/>

    </>
)

}















export default Sidebar
