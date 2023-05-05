import React, {useState, useEffect} from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import koseg from '../assets/Koseg.svg'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../actions/store';

const Recommended = () => {
    const dispatch = useDispatch();
    const cars = useSelector((state) => state.cars);
     
        useEffect(() => {
          dispatch(fetchCars());
        }, [dispatch]);    
    const [liked, setLiked] = useState(() => {
        const local = localStorage.getItem("liked")
        return local ? JSON.parse(local) : {}
      })
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
      var handlePageRelocate = function() {

      }
   
  return (
    <div className='main-flex'>
         <div className='popular-div'>
           <div className='popular-header'>
                <h3>Recommended Cars</h3>
           </div>
        </div>
        {cars && cars.map((item) => {
        return (
            <div className='car-card'>
            <div className='card-header'>
                <div className='card-name-liked'>
                    <div>
                        <p className='card-car-name'>{item.make} {item.model}</p>
                        <p className='card-car-type'>{item.type}</p>
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
                            <p>{item.tank}G</p>
                        </div>
                        <div>
                            <img src={car}></img>
                            <p>{item.transmission}</p>
                        </div>
                        <div>
                            <img src={people}></img>
                            <p>{item.capacity} Person</p>
                        </div>
                    </div>
                </div>
                <div className='car-card-footer'>
                    <p className='car-footer-price'>$99.00 /<span>day</span></p>
                    <button 
                    onClick={handlePageRelocate}
                    className='car-footer-button'>
                        Rent Now
                    </button>
                </div>
            </div>
        )
        })}
    </div>
  )
}

export default Recommended