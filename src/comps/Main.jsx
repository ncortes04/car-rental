import React, { useEffect, useState } from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import koseg from '../assets/Koseg.svg'


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
           <div className='main-flex'>
               {testMap && testMap.map((item) => {
                return (
                    <div className='car-card'>
                    <div className='card-header'>
                        <div className='card-name-liked'>
                            <div>
                                <p className='card-car-name'>car.name</p>
                                <p className='card-car-type'>car.type</p>
                            </div>
                            <button 
                            onClick={() => handleLiked("123212")}
                            className='liked-btn'>
                                <img src={liked["123212"] ? likedActive : likedInactive }></img>
                            </button>
                        </div>
                    </div>
                        <div className='card-main-img-div'>
                            <div className='img-shadow-box'>
                                <img src={koseg}></img>
                                <span className='shadow'></span>
                            </div>
                        </div>
                        <div className='card-secondary-div'>
                            <div className='card-secondary-info'>
                                <div>
                                    <img src={gasoline}></img>
                                    <p>24Gal</p>
                                </div>
                                <div>
                                    <img src={car}></img>
                                    <p>Manuak</p>
                                </div>
                                <div>
                                    <img src={people}></img>
                                    <p>2 People</p>
                                </div>
                            </div>
                        </div>
                        <div className='car-card-footer'>
                            <p className='car-footer-price'>$99.00 /<span>day</span></p>
                            <button className='car-footer-button'>
                                Rent Now
                            </button>
                        </div>
                    </div>
                )
               })}
           </div>
        </div>
        
    </div>
  )
}

export default Main