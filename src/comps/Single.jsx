import React, {useState} from 'react'
import likedActive from '../assets/Like.svg'
import Main from './Main'
import likedInactive from '../assets/LikedBlank.svg'
import Sidebar from './Sidebar'
import '../styles/single.css'
const Single = () => {
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
    <div className='single-side-flex'>
         <Sidebar/>
        <div className='single-container'>
        <div className='single-car-upper'>
            <div className='car-catalouge'>
                <div className='ad2'>
                <div className='adCircles'>
                        <span className='c1'></span>
                        <span className='c2'></span>
                        <span className='c3'></span>
                        <span className='c4'></span>
                        <span className='c5'></span>
                    </div>
                    <div className='ad-text'>
                        <h3>The Best Platform for Car Rental</h3>
                        <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    </div>
                </div>
                <div className='car-single-subphotos'>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                    <div>
                        <img></img>
                    </div>
                </div>
            </div>
            <div className='car-single-expanded-description'>
                <div className='card-header'>
                    <div className='card-name-liked'>
                        <div>
                            <p className='single-car-name '>car.name</p>
                            <p className='card-car-type'>car.reviews</p>
                        </div>
                        <button 
                        onClick={() => handleLiked("123212")}
                        className='liked-btn'>
                            <img src={liked["123212"] ? likedActive : likedInactive }></img>
                        </button>
                    </div>
                </div>
                <div className='car-decription-div'>
                    <p className='card-single-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore laudantium illo dolores amet fugit beatae quo molestias nulla culpa porro. Provident amet quisquam aliquid ad repellat sint laboriosam reprehenderit velit?</p>
                </div>
                <div className='car-attributes'>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Car Type</p>
                            <p className='attr-value'>car.type</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Car Type</p>
                            <p className='attr-value'>car.type</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Car Type</p>
                            <p className='attr-value'>car.type</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Car Type</p>
                            <p className='attr-value'>car.type</p>
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
        </div>
        <div className='single-reviews'>
            <div className='reviews-header-div'>
                <h3>Reviews</h3>
                <span>13</span>
            </div>
            <div className='review-flex-div'>
                <div className='review-comment-container'>
                    <div className='review-comment-profile-container'>
                        <a>p</a>
                    </div>
                    <div className='review-comment-main'>
                        <div className='review-comment-main-upper'>
                            <div className='review-comment-user'>
                                <h3>comment.user</h3>
                            </div>
                            <div className='review-comment-information'>
                                <p>comment.date</p>
                                <span>stars</span>
                            </div>
                        </div>
                        <div className='review-comment-main-lower'>
                            <p className='review-comment-text'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore deleniti incidunt minus ipsum. Aliquid nulla similique mollitia suscipit harum minima a in? Dignissimos quisquam repudiandae nemo unde asperiores optio maxime?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>            
    </div>
  )
}

export default Single