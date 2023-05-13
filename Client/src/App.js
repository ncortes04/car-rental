import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
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
import Adminpanel from './comps/adminpanel';
import Login from './comps/login';
import PieChart from './comps/PieChart';
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
                    <Main/>
                 </div>
                </div>}/>
                <Route path='/viewall' 
              element={<ViewAll/>}/>
              <Route path='/single/:id' element={<Single/>}/>
              <Route path='/checkout' element={<Checkout/>}/>
              <Route path='/admin' element={<Adminpanel/>}/>
              <Route path='/login' element={<Login/>}/>
            </Routes>
        <Footer/>
      </div>
    </Router>
 
  );
}

export default App;
