import React from 'react'
import Escapes from './Escapes';
import Header from './Header';
import CardCarousel from './CardCarousel';
const Main = () => {
  return (
    <><Header/>
    <div className=' container-fluid box'>
        <Escapes/>
        <CardCarousel/>
    </div>
    </>
  )
}

export default Main