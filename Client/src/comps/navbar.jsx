import React from 'react'

const NavBar = () => {
  return (
    <div className='navContainer'>
        <h1><span>Rental</span>Car</h1>
        <div className='search-div'>
            <button></button>
            <input
            placeholder='Search Something Here'
            onChange={(e) => {e.target.placeholder = ''}}
            onBlur={(e) => {e.target.placeholder = 'Search Something Here'}}
            >
            </input>
            <button></button>
        </div>     
        <div className='nav-Icons'>
            <button className='liked'></button>
            <button className='notifications'></button>
            <button className='settings'></button>
            <button className='profile'></button>
        </div>
    </div>
  )
}

export default NavBar