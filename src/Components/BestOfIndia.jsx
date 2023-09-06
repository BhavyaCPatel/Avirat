import React from 'react'
import CardList from './CardList'
import Escapes from './Escapes';
import Header from './Header';
const BestOfIndia = () => {
  return (
    <div className='container-fluid box'>
        <Header/>
        <Escapes/>
        <CardList/>
    </div>
  )
}

export default BestOfIndia