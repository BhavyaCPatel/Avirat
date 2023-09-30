import React from 'react';
import Cards from './Cards';
import { BoEData, BoIData, BoSeAData, IEData, responsive } from '../data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const CardCarousel = () => {
    const card1 = BoIData.map((item) => (
        <Link key={item.id} to={`/states/${item.name}`}>
            <Cards url={item.imageurl}  name={item.name}/>
        </Link>
    ));
    const card2 = BoEData.map((item) => (
        <Link key={item.id} to={`/states/${item.name}`}>
            <Cards url={item.imageurl}  name={item.name}/>
        </Link>
    ));
    const card3 = BoSeAData.map((item) => (
        <Link key={item.id} to={`/states/${item.name}`}>
            <Cards url={item.imageurl}  name={item.name}/>
        </Link>
    ));
    const card4 = IEData.map((item) => (
        <Link key={item.id} to={`/states/${item.name}`}>
            <Cards url={item.imageurl}  name={item.name}/>
        </Link>
    ));

    return (
        <>
            <div className="App my-5">
                <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Best Of India</h1></u>
                <Carousel  responsive={responsive} className='p-3'>
                    {card1}
                </Carousel>
            </div>
            <div className="App my-5">
                <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Best Of Europe</h1></u>
                <Carousel  responsive={responsive} className='p-3'>
                    {card2}
                </Carousel>
            </div>
            <div className="App my-5">
                <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Best Of SouthEast Asia</h1></u>
                <Carousel  responsive={responsive} className='p-3'>
                    {card3}
                </Carousel>
            </div>
            <div className="App my-5">
                <u><h1 className='text-center m-3' style={{color: '#c7f9ccff'}}>Island Escapes</h1></u>
                <Carousel  responsive={responsive} className='p-3'>
                    {card4}
                </Carousel>
            </div>
    </>
    );
};

export default CardCarousel;
