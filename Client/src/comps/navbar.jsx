import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../features/user';
import { useNavigate } from 'react-router';
import authService from '../utils/auth'
import searchGlass from '../assets/search-normal.svg'
const NavBar = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.unfilteredData); 
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    setShowSuggestions(query !== '');
  };

  // Function to filter cars based on search query
  let count = 0;
  const filteredCars = searchQuery.length > 0 ? cars.filter((car) => {
    if (count < 10 && car.model.toLowerCase().startsWith(searchQuery.toLowerCase())) {
      count++;
      return true; // Include the car in the filtered list
    }
    return false; // Exclude the car from the filtered list
  }) : [];
  
  // Limit the number of suggestions to a maximum of 10
  var handlePageRelocate = function(itemId, index) {
    const carsLocal = JSON.parse(localStorage.getItem('cars')) || [];
    const carToStore = cars[index];
    if(carsLocal.length == 4){
       carsLocal.pop()
    }
    carsLocal.unshift(carToStore);
    console.log("kdjjhasdakidhjafljkhfdjlkasljakf")
    localStorage.setItem('cars', JSON.stringify(carsLocal));
    navigate(`/single/${itemId}`);
  }
 return (
    <div className='navContainer'>
      <h1 
      className='pointer'
      onClick={() => {navigate(`/`)}}>
        <span>Rental</span>Car
      </h1>
      <div className='height100 search-div-fixed red flex justc alignc'>
        <div className={filteredCars.length ? 'search-div flex col br1' : 'search-div flex col'}>
          <div className='pd1'>
              <div className='search-input-container flex wd100 justsr'>
                <img src={searchGlass}></img>
                <input
                  placeholder='Search Something Here'
                  onChange={handleSearchChange}
                  onBlur={(e) => {
                    e.target.placeholder = 'Search Something Here';
                  }}
                />
            </div>
            <div className='flex col wrap'>
            {filteredCars && (
              <div className='suggestion-box'>
                {filteredCars.map((car, index) => (
                  <button 
                  onClick={() => {handlePageRelocate(car.id, index)}}
                  className='search-suggestions' 
                  key={car.id}>
                    {car.model}
                  </button>
                ))}
              </div>
            )}
            </div>
          </div>

        </div>
      </div>
     
      <div className='flex alignc gap2'>
        {authService.loggedIn()
        ? <button onClick={() => authService.logout()} className='nav-anchor-buttons text-bold'>Signout</button>
        : <a  className='nav-anchor-buttons text-bold' href='/login' >Login</a>
        }
        <a href='/viewall' className='nav-anchor-buttons text-bold'>View All</a>      
      </div>
    </div>
  );
};

export default NavBar;
