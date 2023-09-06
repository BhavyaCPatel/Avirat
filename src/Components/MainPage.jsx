import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main'
import StatesPage from './StatesPage';
const MainPage = () => {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Main className='m-2'/>} />
            <Route path="/states/:Cname" element={<StatesPage/>} />
          </Routes>
        </Router>
    </div>
  )
}

export default MainPage