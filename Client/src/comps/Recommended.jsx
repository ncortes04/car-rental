import React, {useState, useEffect} from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import koseg from '../assets/Koseg.svg'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchCars } from '../features/cars';
import {fetchUser} from '../features/user';
import authService from '../utils/auth'


const Recommended = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCars());
    }, []);

    const cars = useSelector((state) => state.car.value);
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
      var handlePageRelocate = function(itemId, index) {
        const carsLocal = JSON.parse(localStorage.getItem('cars')) || [];
        const carToStore = cars[index];
        if(carsLocal.length == 4){
           carsLocal.pop()
        }
        carsLocal.unshift(carToStore);
        localStorage.setItem('cars', JSON.stringify(carsLocal));
        navigate(`/single/${itemId}`);
      }
   
  return (
    <div className='main-flex'>
         <div className='popular-div'>
           <div className='popular-header'>
                <h3>Recommended Cars</h3>
           </div>
        </div>
        {cars && cars.map((item, index) => {
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
                    onClick={() => {handlePageRelocate(item.id, index)}}
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