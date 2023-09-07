import React from 'react'
import CardHover from './CardHover'
import { BoDData, BoSData, DLData, HAData } from '../data'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
      slidesToSlide: 2,
  },
  desktop: {
      breakpoint: { max: 1024, min: 800 },
      items: 3,
  },
  tablet: {
      breakpoint: { max: 800, min: 464 },
      items: 2,
  },
  mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
  },
}
const CardHoverList = () => {
  const card1=DLData.map((item)=>(
    <CardHover  name={item.name}
                img={item.img}
                rating={item.rating}
                duration={item.duration}
                price={item.price}/>
  ))
  const card2=BoSData.map((item)=>(
    <CardHover  name={item.name}
                img={item.img}
                rating={item.rating}
                duration={item.duration}
                price={item.price}/>
  ))
  const card3=BoDData.map((item)=>(
    <CardHover  name={item.name}
                img={item.img}
                rating={item.rating}
                duration={item.duration}
                price={item.price}/>
  ))
  const card4=HAData.map((item)=>(
    <CardHover  name={item.name}
                img={item.img}
                rating={item.rating}
                duration={item.duration}
                price={item.price}/>
  ))
  return (
    <>
      <div className='App '>
        <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Discover Ladakh</h1></u>
        <Carousel responsive={responsive}>
              {card1}
        </Carousel>
      </div>
      <div className='App '>
        <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Best Of Singapore</h1></u>
        <Carousel responsive={responsive}>
              {card2}
        </Carousel>
      </div>
      <div className='App '>
        <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Best Of Dubai</h1></u>
        <Carousel responsive={responsive}>
              {card3}
        </Carousel>
      </div>
      <div className='App '>
        <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Himalayan Adventures</h1></u>
        <Carousel responsive={responsive}>
              {card4}
        </Carousel>
      </div>
    </>
  )
}

export default CardHoverList