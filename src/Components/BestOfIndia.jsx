import React from 'react'
import CardList from './CardList'
import './Country.css'
const BestOfIndia = () => {
  return (
    <div className='countainer-fluid box'>
        <u><h1 className='text-center m-3' style={{color: '#80ed99ff'}}>Best Of India</h1></u><br/>
        <CardList className='m-2'/>
    </div>
  )
}

export default BestOfIndia