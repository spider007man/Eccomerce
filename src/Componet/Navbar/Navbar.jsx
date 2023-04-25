import React from 'react'
import Login from './Login'
import "./Navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='mane-containar'>
        {/* this is 1st div.... */}
        <div className='logo-flipkart'>
           <a  href="/"> <img width="75" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="flipkart" /> </a> 
           <a  className="explore"href="https://www.flipkart.com/plus">Exolore
           <span className='plus'>  Plus</span>
           <img  width= "10"src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" alt="" /></a>
        </div>
        {/* this is 2st div */}
         <div className='searchbar'>
            <input type="text" placeholder='search' />
            <i color="#2874f0"className="fa-solid fa-magnifying-glass"></i>
        </div>
        {/* this is a login button */}
           <Login/> 
         {/* this is 3st div */}
        <div className='text-line'>
           <p>Become a Sellar</p>
           <p>More</p>  
           <span><i id='icon-cart' className="fa-sharp fa-solid fa-cart-shopping"/>Cart</span>
         </div>    
      
    </nav>
  
    </>
  )
}

export default Navbar
