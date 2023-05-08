import React, {useState, useEffect} from 'react'
import likedActive from '../assets/Like.svg'
import Main from './Main'
import likedInactive from '../assets/LikedBlank.svg'
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';
import { getIndividual, addComment, deleteComment } from "../utils/apiRoutes"
import goldStar from'../assets/ic-actions-star.svg'
import blankStar from'../assets/ic-actions-star-blank.svg'
import '../styles/single.css'
import Recent from './Recent'
import Recommended from './Recommended'
const Single = () => {
    const [loading, setLoading] = useState(true)
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [newComment, setNewComment] = useState('');
    const [singleItem, setsingleItem] = useState({});
    const [reviews, setReviews] = useState([])
    const [bookings, setBookings] = useState([])

    const [liked, setLiked] = useState(() => {
        const local = localStorage.getItem("liked")
        return local ? JSON.parse(local) : {}
      })
      const {id} = useParams();
      const getItems = async () => {
        setLoading(true)
        const response = await getIndividual(id);
  
        const item = await response.json();
        await setReviews(item.car.Reviews)
        await setBookings(item.bookedDays)
        setsingleItem(item.car);
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
      const handleCommentInputChange = (e) => {
        setNewComment(e.target.value);
      };
    
      const handleAddComment = () => {
        // add your code to post new comment here
        setShowCommentInput(false); // hide the input field after submitting the comment
        setNewComment(''); // clear the input field
      };
    
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
        <span>{reviews.length}</span>
      </div>
      {reviews.length <= 0 ? (
        <h3>No Reviews Yet, Be The first</h3>
      ) : (
        <>
          {reviews.map((review) => {
            return (
              <div className='review-flex-div'>
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
          {showCommentInput ? (
            <div className='review-flex-div'>
              <div className='review-comment-container'>
                <div className='review-comment-main wd100'>
                  <div className='review-comment-main-upper'>
                    <div className='review-comment-information'>
                      <button onClick={handleAddComment}>Submit</button>
                    </div>
                  </div>
                  <div className='review-comment-main-lower wd100'>
                    <textarea
                      placeholder='Add a comment...'
                      value={newComment}
                      onChange={handleCommentInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='add-comment-button-container'>
              <button
                className='add-comment-button'
                onClick={() => setShowCommentInput(true)}
              >
                Add a comment
              </button>
            </div>
          )}
        </>
      )}
    </div>
        <Recent/>
        <Recommended/>
        </div>            
    </div>
  )
}

export default Single