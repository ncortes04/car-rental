import React, { useEffect, useState } from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import koseg from '../assets/Koseg.svg'
import Recent from './Recent'
import Recommended from './Recommended'


const Main = () => {
    const [liked, setLiked] = useState(() => {
        const local = localStorage.getItem("liked")
        return local ? JSON.parse(local) : {}
      })
    const testMap = [1,2,3,4,5,6,7,8,9,]
      const handleLiked = (id) => {
        setLiked(prevLiked => {
          const newLiked = {...prevLiked}
          if (newLiked[id]) {
            delete newLiked[id]
          } else {
            newLiked[id] = true
          }
          localStorage.setItem("liked", JSON.stringify(newLiked))
          return newLiked
        })
      }
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