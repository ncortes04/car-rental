import React from 'react'

const Header = () => {
  return (
    <div className='header-container'>
        <div className='ad1'>
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
            <button className='rental-car-ad-btn'><span>Rental Car</span></button>
        </div>
        <div className='ad2'>
            <div className='adCircles'>
                <span className='c1'></span>
                <span className='c2'></span>
                <span className='c3'></span>
                <span className='c4'></span>
                <span className='c5'></span>
            </div>
            <div className='ad-text'>
                <h3>Easy way to rent a car at a low price</h3>
                <p>Providing cheap car rental services and safe and comfortable facilities.</p>
            </div>
            
            <button className='rental-car-ad-btn second'><span>Rental Car</span></button>
        </div>
    </div>
  )
}

export default Header