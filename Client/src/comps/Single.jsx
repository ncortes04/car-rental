import React, {useState, useEffect} from 'react'
import likedActive from '../assets/Like.svg'
import Main from './Main'
import likedInactive from '../assets/LikedBlank.svg'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';
import { getIndividual } from "../utils/apiRoutes"
import { useSelector } from 'react-redux'
import { deleteReview } from '../utils/apiRoutes'
import goldStar from'../assets/ic-actions-star.svg'
import blankStar from'../assets/ic-actions-star-blank.svg'
import CalendarComponent from "./calendar";
import '../styles/single.css'
import Recent from './Recent'
import Recommended from './Recommended'
import Review from './Review'

const Single = () => {
    const [loading, setLoading] = useState(true)
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [singleItem, setsingleItem] = useState({});
    const [reviews, setReviews] = useState([])
    const [calendarDate, setCalendarDate] = useState(false)

    const [liked, setLiked] = useState(() => {
    
        const local = localStorage.getItem("liked")
        return local ? JSON.parse(local) : {}
      })
      const user = useSelector((state) => state.user.value)
      const {id} = useParams();
      const getItems = async () => {
        setLoading(true)
        try {
            const response = await getIndividual(id);
  
            const item = await response.json();
            setReviews(item.car.Reviews)
            setsingleItem(item.car);
        } catch (e) {
            console.log(e)
        }
        setLoading(false)
    };

      useEffect(() => {
        getItems();
      }, [id]);
      function currentTime(date){
          const options = { year: "numeric", month: "long", day: "numeric", hour:"numeric", minute: 'numeric'}
          return new Date(date).toLocaleDateString(undefined, options)
      }

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
      const handleDelete = async (reviewId) => {
        try {
            const response = await deleteReview(reviewId)
        } catch(e) {
            console.log(e)
        }
      }
      const getStar = function(limit){
        let res = []
        for(let i = 0; i < 5; i ++){
            if(i < limit) {
                res.push(
                    <img src={goldStar}></img>

                )
            } else {
                res.push(<img src={blankStar}></img>)
            }
        }
        return res
      }
  return (
    <div className='single-side-flex'>
         <Sidebar/>
         
        <div className='single-container'>
        <div className='single-car-upper'>
            <div className='car-catalouge'>
                <div className='car-'>
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
                    <div className='card-name-liked shorflex1'>
                        <div className='flex col shorflex1'>
                            <div className='flex alignc spaceb'>
                                <p className='single-car-name '>{singleItem.make} {singleItem.model}</p>
                                <button 
                                onClick={() => handleLiked("123212")}
                                className='liked-btn'>
                                    <img src={liked["123212"] ? likedActive : likedInactive }></img>
                                </button>
                            </div>
                            <div className='flex gap2 alignc'>
                                <div>{getStar(singleItem.averageRating)}</div>
                                <p className='card-car-type'>{singleItem.ratingCount} Reviews</p>
                            </div>
                        </div>
                       
                    </div>
                </div>
                <div className='car-decription-div shorflex1'>
                    <p className='card-single-description'>{singleItem.description}</p>
                </div>
                <div className='car-attributes'>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>TypeCar</p>
                            <p className='attr-value'>{singleItem.type}</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Transmission</p>
                            <p className='attr-value'>{singleItem.transmission}</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Capacity</p>
                            <p className='attr-value'>{singleItem.capacity} people</p>
                        </div>
                    </div>
                    <div className='car-attr-flex'>
                        <div className='car-attr-flex-text'>
                            <p className='attr-label'>Tank Size</p>
                            <p className='attr-value'>{singleItem.tank} Gal</p>
                        </div>
                    </div>
                </div>
                <div className='car-card-footer'>
                    <p className='car-footer-price'>${singleItem.dailyPrice} /<span>day</span></p>
                    <button 
                    className='car-footer-button'
                    onClick={() => setCalendarDate(true)}>
                        Check Availability
                    </button>
                </div>
            </div>
        </div>          
        <div>
        {calendarDate 
        ?
            <div className='calendar-container'>
                    <CalendarComponent id={id} />
            </div>
        : null
         }
        </div>
        <div className='single-reviews'>
            <div className='reviews-header-div spaceb'>
                <div className='flex gap2 alignc'>
                    <h3>Reviews</h3>
                     <span>{reviews.length}</span>
                </div>
            <div className='add-comment-button-container'>
                <button
                    className='car-footer-button'
                    onClick={() => setShowCommentInput(!showCommentInput)}
                >
                    Add a comment
                </button>
            </div>
        </div>
        {reviews.length <= 0 ? (
                    <h3>No Reviews Yet, Be The first</h3>
                ) : (
                    <>
                        {reviews.map((review) => {
                            return (
                            <div key={review.title} className='review-flex-div'>
                                <div className='flex spaceb bb-black alignc pdb1 mgb2'>
                                    <h3 className='review-comment-title mg0'>{review.header}</h3>
                                    {review.user.id === user.id 
                                    ? <button onClick={() => handleDelete(review.id)} className='btn-danger'>Delete</button>
                                    : null
                                    }
                                </div>
                                    <div className='review-comment-container'>
                                    <div className='review-comment-profile-container'>
                                        <a className='profile-icon'>
                                            {review.user.name.charAt(0)}
                                        </a>
                                    </div>
                                    <div className='review-comment-main wd100'>
                                        <div className='review-comment-main-upper'>
                                        <div className='review-comment-user'>
                                            <h3>{review.user.name}</h3>
                                            <p className='text-light'>Verified Buyer</p>
                                        </div>
                                        <div className='review-comment-information'>
                                            <p>{currentTime(review.createdAt)}</p>
                                            <div>{getStar(review.rating)}</div>
                                        </div>
                                        </div>
                                        <div className='review-comment-main-lower wd100'>
                                            <p className='review-comment-text'>{review.comment}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                    </>
                )}
            <div>
            {showCommentInput 
            ? <Review setShowCommentInput={setShowCommentInput} id={id} />
            : null}
             </div>
        </div>
            <Recent/>
            <Recommended/>
            </div>            
        </div>
  )
}

export default Single