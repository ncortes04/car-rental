import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import NavBar from './comps/navbar';
import Header from './comps/Header';
import PickDrop from './comps/PickDrop'
import Main from './comps/Main'
function App() {

  return (
    <div className="App" >
      <NavBar/> 
      <div className='container'>
        <Header/>
        <PickDrop/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
