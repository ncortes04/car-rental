import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import NavBar from './comps/navbar';
import Header from './comps/Header';
import PickDrop from './comps/PickDrop';
function App() {

  return (
    <div className="App" >
      <div className='container'>
        <NavBar/> 
        <Header/>
        <PickDrop/>
      </div>
    </div>
  );
}

export default App;
