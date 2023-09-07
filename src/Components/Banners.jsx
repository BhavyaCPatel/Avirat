import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import MaldivesB from './Assets/MaldivesB.jpg'
import DubaiB from './Assets/DubaiB.jpg'
import SentosaB from './Assets/SentosaB.jpg'
import HimalayaB from './Assets/HimalayaB.jpg'
const data = [
  {image: MaldivesB},
  {image: DubaiB},
  {image: SentosaB},
  {image: HimalayaB} 
]

function HomeCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
        {data.map((slide, i) => {
          return (
            <Carousel.Item interval={2500}>        
              <img
                className="rounded"
                src={slide.image}
                alt=''
                width={'100%'}
                style={{height:'500px'}}
              />
            </Carousel.Item>
          )
        })}
      
    </Carousel>
  );
}
export default HomeCarousel;