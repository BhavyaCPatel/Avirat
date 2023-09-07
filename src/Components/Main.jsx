import React from 'react'
import Escapes from './Escapes';
import Header from './Header';
import CardCarousel from './CardCarousel';
import Banners from './Banners';
import CardHoverList from './CardHoverList';
import Blogs from './Blogs';
import Footer from './Footer';
const Main = () => {
  return (
    <>
    <Header/>
    <div className=' container-fluid box'>
        <Escapes/>
        <CardCarousel/>
        <Banners/>
        <CardHoverList/>
        <Blogs/>
    </div>
    <Footer/>
    </>
  )
}

export default Main