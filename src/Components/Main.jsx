import React from 'react'
import Escapes from './Escapes';
import Header from './Header';
import CardCarousel from './CardCarousel';
import Banners from './Banners';
import CardHoverList from './CardHoverList';
const Main = () => {
  return (
    <><Header/>
    <div className=' container-fluid box'>
        <Escapes/>
        <CardCarousel/>
        <Banners/>
        <CardHoverList/>
    </div>
    </>
  )
}

export default Main