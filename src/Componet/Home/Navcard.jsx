import React from 'react'
import Navhome from './Navhome'
import {Menucard} from "../../Menucard/Menucard"
import "./Navcard.css"

const Navcard = () => {
  return (
    <>
     <div className='card-componet'>
      {
        Menucard.map(item => (
          <div className='card-mine'>
            <img src={item.url} alt="" width={70}/>
            <p>{item.text}</p>
          </div>
        ) )
      }
     </div>
     <div className='card-mine2'>
     <Navhome/>
     </div>
      
    </>
  )
}

export default Navcard ;

