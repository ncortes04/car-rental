import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import NavBar from './comps/navbar';
import Header from './comps/Header';
import PickDrop from './comps/PickDrop'
import Main from './comps/Main'
import Single from './comps/Single';
import Sidebar from './comps/Sidebar';
import Footer from './comps/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ViewAll } from './comps/ViewAll';
import Checkout from './comps/Checkout';

function App() {

  return (
    <Router>
    <div className="App" >
        <NavBar/> 
          <Routes>
            <Route path='/' 
            element={ 
                <div className='container'>
                  <div className='main'>
                    <Header/>
                    <PickDrop/>
                    <Main/>
                 </div>
                </div>}/>
                <Route path='/viewall' 
              element={<ViewAll/>}/>
              <Route path='/single' element={<Single/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
            </Routes>
        <Footer/>
      </div>
    </Router>
 
  );
}

export default App;
