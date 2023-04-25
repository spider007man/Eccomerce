import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import {siledcard} from "../../Menucard/Menucard"


const responsive = {

  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Navhome = () => {
  return (
    <>
  <Carousel
  swipeable={false  }
  draggable={false}
  responsive={responsive}
  infinite={true}
  autoPlay={false}
  autoPlaySpeed={4000}
  transitionDuration={500}
>

     {
       siledcard.map(card => (
          <img src={card.url} alt="" />
        
      ))
    }
    </Carousel>
    </>
  )
}

export default Navhome
