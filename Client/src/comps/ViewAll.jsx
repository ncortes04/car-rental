import Sidebar from './Sidebar'
import PickDrop from './PickDrop'
import React, { useEffect, useState } from 'react'
import likedActive from '../assets/Like.svg'
import { useSelector, useDispatch } from 'react-redux'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import { useNavigate } from 'react-router'

export const ViewAll = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [liked, setLiked] = useState(() => {
        const local = localStorage.getItem('liked');
        return local ? JSON.parse(local) : {};
        });
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
        const cars = useSelector((state) => state.car.unfilteredData);
        const filteredCars = useSelector((state) => state.car.filteredData);
        const handleLiked = (id) => {
        setLiked((prevLiked) => {
            const newLiked = { ...prevLiked };
            if (newLiked[id]) {
            delete newLiked[id];
            } else {
            newLiked[id] = true;
            }
            localStorage.setItem('liked', JSON.stringify(newLiked));
            return newLiked;
        });
    };

        const carsToDisplay = Object.keys(liked).length > 0 ? filteredCars : cars;
  return (
    <div className='viewall-container'>
        <Sidebar/>
        <div className='viewall-flex'>
            <div className='viewall-main'>
                <PickDrop/>
                <div>
                <div className='popular-div'>
           <div className='main-flex'>
            {carsToDisplay && carsToDisplay.map((item, index) => {
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
                                <img></img>
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
                            <p className='car-footer-price'>${item.dailyPrice} /<span>day</span></p>
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
        </div>
                </div>
            </div>
        </div>
    </div>
  )
}
