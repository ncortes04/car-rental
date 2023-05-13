import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setFilteredData } from '../features/cars';

const Sidebar = ({ updateFilteredData }) => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.car.unfilteredData);
  const [checkedItems, setCheckedItems] = useState({ type: {}, capacity: {} });
  const [price, setPrice] = useState(250);
  const [activeFilters, setActiveFilters] = useState([]);
  
  const handleSliderChange = (event) => {
    setPrice(event.target.value);
  };
  
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const [category, value] = name.split('_');
    setCheckedItems((prevItems) => ({
      ...prevItems,
      [category]: {
        ...prevItems[category],
        [value]: checked,
      },
    }));
    setActiveFilters((prevFilters) => {
      if (checked) {
        return [...prevFilters, { category, value }];
      } else {
        return prevFilters.filter((filter) => !(filter.category === category && filter.value === value));
      }
    });
  };
  
  const handleFilterClick = () => {
    const filteredData = cars.filter((item) => {
      const isTypeMatched = checkedItems.type[item.type] || Object.values(checkedItems.type).every((value) => !value);
      const isCapacityMatched = checkedItems.capacity[item.capacity] || Object.values(checkedItems.capacity).every((value) => !value);
      const isPriceMatched = item.dailyPrice <= price;
      return isTypeMatched && isCapacityMatched && isPriceMatched;
    });
    dispatch(setFilteredData(filteredData));
  };
  
  const Types = [
    { name: 'Sport', key: 'sport', quantity: 20 },
    { name: 'SUV', key: 'SUV', quantity: 20 },
    { name: 'MPV', key: 'MPV', quantity: 20 },
    { name: 'Sedan', key: 'sedan', quantity: 20 },
    { name: 'Coupe', key: 'hatchBack', quantity: 20 },
  ];
  
  const Capacity = [
    { name: '2 Person', key: '2', quantity: 20 },
    { name: '4 Person', key: '4', quantity: 20 },
    { name: '6 Person', key: '6', quantity: 20 },
    { name: '8 or More', key: '8', quantity: 20 },
  ];
  
  const handleFilterButtonClick = (category, value) => {
    setCheckedItems((prevItems) => {
      const updatedItems = { ...prevItems };
      updatedItems[category][value] = false; // Uncheck the corresponding checkbox
      return updatedItems;
    });
  
    setActiveFilters((prevFilters) =>
      prevFilters.filter((filter) => !(filter.category === category && filter.value === value))
    ); // Remove the filter from the array
  };
  const clearFilters = () => {
    setCheckedItems({ type: {}, capacity: {} });
    setActiveFilters([]);
  };
  return (
    <div className='sidebar-container'>
      <div className='header-container flex col gap1'>
          <h3 className='header-h3'>Filters Applied: {activeFilters.length}</h3>
          <div className='flex wrap gap2'>
          {activeFilters.map((filter) => (
            <button
              key={`${filter.category}_${filter.value}`}
              className='filter-button flex gap2 alignc justc'
            >
              <p className='mg0'>
                {filter.value} {filter.category === 'capacity' ? 'person' : null}
              </p>
              <span className='filter-button-close' onClick={() => handleFilterButtonClick(filter.category, filter.value)}>
                <p> &times;</p>
            </span>
            </button>
          ))}
          </div>
          {activeFilters.length > 0 && (
        <button className='filter-button' onClick={() => clearFilters()}>
          Clear All Filters
        </button>
      )}
      </div>
      <label>TYPE</label>
      <div className='check-list'>
      {Types.map((item) => (
          <label className='check-label'>
              <input
              type='checkbox'
              className='check-box'
              name={`type_${item.key}`}
              checked={checkedItems.type[item.key]}
              onChange={handleCheckboxChange}
            />
            <p className='check-text'>
              {item.name} <span>({item.quantity})</span>
            </p>
          </label>
        ))}
      </div>
      <label>CAPACITY</label>
      <div className='check-list'>
        {Capacity.map((item) => (
          <label key={item.key} className='check-label'>
              <input
              type='checkbox'
              className='check-box'
              name={`capacity_${item.key}`}
              checked={checkedItems.capacity[item.key]}
              onChange={handleCheckboxChange}
            />
            <p className='check-text'>
              {item.name} <span>({item.quantity})</span>
            </p>
          </label>
        ))}
      </div>
      <label>PRICE</label>
      <input
        className='blue-slider'
        type="range"
        min="50"
        max="1000"
        value={price}
        onChange={handleSliderChange}
      />
      <p className='price-text'>Max: ${price}</p>
      <button className='button-primary' onClick={() => handleFilterClick()}>Apply</button>
    </div>
  )
}

export default Sidebar