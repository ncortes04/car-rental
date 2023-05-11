import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { getCarBookings } from '../utils/apiRoutes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calendar = ({ id }) => {
  const [bookedDays, setBookedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate()
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);


  const handlePageRelocate = function(itemId) {
    navigate(`/checkout/`);
  };
  
  useEffect(() => {
    async function fetchBookings() {
      try {
        setIsLoading(true);
        const response = await getCarBookings(id);
        const data = await response.json();
        const bookings = data.bookedDays.map(date => new Date(date));
        setBookedDays(bookings);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }

    if (id && bookedDays.length === 0) {
      fetchBookings();
    }
  }, [id, bookedDays.length]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  };
  console.log(dateRange)
  return (
    <div className='flex'>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <DateRangePicker
          ranges={dateRange}
          onChange={handleSelect}
          minDate={new Date()}
          disabledDates={bookedDays}
        />
      )}
      <div>
        <button onClick={handlePageRelocate} className='review-submit-btn'>asdsdsdsdadkaskjdlk</button>
      </div>
    </div>
  );
};

export default Calendar;
