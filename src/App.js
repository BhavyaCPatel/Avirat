import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import Escapes from './Components/Escapes';
import BestOfIndia from './Components/BestOfIndia';
function App() {
  return (
    <div className="App">
      <Header/>
      <Escapes/>
      <BestOfIndia/>
    </div>
  );
}

export default App;
