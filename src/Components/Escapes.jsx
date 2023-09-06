import React from 'react'
import './escapes.css'
import India from './Assets/Best-of-India.jpg'
import International from './Assets/International-escapes.jpg'
import Himalaya from './Assets/Himalayan-adventure.jpg'
import Globe from './Assets/Globe.jpg'
import Dubai from './Assets/Dubai.jpg'
import AbuDhabi from './Assets/Abu-Dhabi.jpg'
import Africa from './Assets/Africa.jpg'
import Amsterdam from './Assets/Amsterdam.jpg'
import Australia from './Assets/Australia.jpg'
import Italy from './Assets/Italy.jpg'
import Malaysia from './Assets/Malaysia.jpg'
import Paris from './Assets/Paris.jpg'
import Singapore from './Assets/Singapore.jpg'
import Thailand from './Assets/Thailand.jpg'
const Escapes = () => {
  const images=[India, International, Himalaya]
  return (
  <div className='escape'>
    <div className='container-fluid head d-flex'>
      <div className="text1">
          <h2>Find Your Perfect <br /> Escape <hr/></h2>
          <h5>Discover your ideal experience.</h5>
        </div>
        {images.map((data, index)=>{
          return(
            <div className='card' key={index}>
              <a href=""><img 
                  src= {data}
                  height={'300px'}
                  alt="" /></a>
            </div>)
          })}
    </div>
    <div className="container-fluid collage">
        <div className="row">
          <div className="col">
            <div className="text"><a href="">
              <img 
                src={Globe}
                height={'200px'}
                className='rounded mb-4'
                width={'90%'}
                alt=""/>
                <div className="middle">Find Best Things To Do <br /> Across The Globe</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                src={Dubai}
                height={'400px'}
                className='rounded mb-4'
                width={'90%'}
                alt=""/>
              <div className="center">Dubai</div></a>
            </div>
          </div>
          <div className="col col-md-2">
            <div className="text"><a href="">
              <img 
                src={Singapore}
                height={'230px'}
                className='rounded mb-4'
                width={'80%'}
                alt=""/>
              <div className="centered">Singapore</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                src={Italy}
                height={'170px'}
                className='rounded mb-4'
                width={'80%'}
                alt=""/>
              <div className="centered">Italy</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                src={Paris}
                height={'170px'}
                className='rounded mb-4'
                width={'80%'}
                alt=""/>
              <div className="centered">Paris</div></a>
            </div>
          </div>
          <div className="col col-md-2">
            <div className="text"><a href="">
              <img 
                  src={Malaysia}
                  height={'170px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Malaysia</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                  src={AbuDhabi}
                  height={'230px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Abu Dhabi</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                  src={Australia}
                  height={'170px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Australia</div></a>
            </div>
          </div>
          <div className="col col-md-2">
            <div className="text"><a href="">
              <img 
                  src={Africa}
                  height={'170px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Africa</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                  src={Amsterdam}
                  height={'170px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Amsterdam</div></a>
            </div>
            <div className="text"><a href="">
              <img 
                  src={Thailand}
                  height={'230px'}
                  className='rounded mb-4'
                  width={'80%'}
                  alt=""/>
              <div className="centered">Thailand</div></a>
            </div>
          </div>
        </div>
    </div>
  </div>
  )
}

export default Escapes