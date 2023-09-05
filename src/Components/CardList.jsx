import React from 'react';
import Cards from './Cards';
import { cardData, responsive } from '../data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { Link } from 'react-router-dom';

const CardList = () => {
    const cards = cardData.map((item) => (
        // <Link key={item.id} to={`/states/${item.name}`}>
            <Cards url={item.imageurl}  name={item.name}/>
        // </Link>
    ));

    return (
    <div className="App">
        <Carousel  responsive={responsive} className='p-3'>
            {cards}
        </Carousel>
    </div>
    );
};

export default CardList;