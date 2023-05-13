import React, {useState} from 'react'
import likedActive from '../assets/Like.svg'
import likedInactive from '../assets/LikedBlank.svg'
import gasoline from '../assets/gas-station.svg'
import people from '../assets/profile-2user.svg'
import car from '../assets/Car.svg'
import { useNavigate } from 'react-router-dom';
import { importImage } from '../utils/helperFunction'
const Recent = () => {
    const navigate = useNavigate()
    const [storedValue, setStoredValue] = useState(() => {
        try {
          const item = window.localStorage.getItem("cars");
          return item ? JSON.parse(item) : [];
        } catch (error) {
          console.log(error);
          return [];
        }
      });
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
      var handlePageRelocate = function(itemId,) {
        navigate(`/single/${itemId}`);
      }
   
  return (
    <div className='main-flex'>
        <div className='popular-div'>
           <div className='popular-header'>
                <h3>Recent Cars</h3>
           </div>
        </div>
        {storedValue && storedValue.map((item, index) => {
        return (
            <div className='car-card'>
            <div className='card-header'>
                <div className='card-name-liked flex col'>
                <p className='card-car-make'>{item.make}</p>
                    <div className='flex spaceb'>
                        <p className='card-car-name'>{item.model}</p>
                        <button 
                    onClick={() => handleLiked(item.id)}
                    className='liked-btn'>
                        <img src={liked[item.id] ? likedActive : likedInactive }></img>
                    </button>
                    </div>
                <p className='card-car-type'>{item.type}</p>
                </div>
            </div>
                <div className='card-main-img-div'>
                    <div className='img-shadow-box'>
                        <img src={importImage(item.imageUrl)} alt={item.imageUrl} />
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
  )
}

export default Recent