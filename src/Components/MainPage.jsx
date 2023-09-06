import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BestOfIndia from './BestOfIndia'
import StatesPage from './StatesPage';
const MainPage = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<BestOfIndia className='m-2'/>} />
            <Route path="/states/:Cname" element={<StatesPage/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default MainPage