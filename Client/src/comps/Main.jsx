import React, { useEffect, useState } from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import koseg from '../assets/Koseg.svg'
import Recent from './Recent'
import Recommended from './Recommended'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../actions/store';


const Main = () => {

  return (
    <div className='main-container'>
        <div className='popular-div'>
           <div className='popular-header'>
                <h3>Popular Cars</h3>
                <a href='/viewall'>View All</a>
           </div>
          <Recent/>
          <Recommended/>
        </div>
        
    </div>
  )
}

export default Main