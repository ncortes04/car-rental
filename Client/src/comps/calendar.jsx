import React, { useState, useEffect } from 'react';
import { DateRangePicker } from 'react-date-range';
import { getCarBookings } from '../utils/apiRoutes';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setCar, setCheckoutBookedDays } from '../features/checkout';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Calendar = ({ id, singleCar }) => {
  const [bookedDays, setBookedDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [dateRange, setDateRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);

  const [selectedDates, setSelectedDates] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        setIsLoading(true);
        const response = await getCarBookings(id);
        if (response.ok) {
          const data = await response.json();
          const bookings = data.bookedDays.map(date => new Date(date));
          setBookedDays(bookings);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setIsError(true);
        }
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        setIsError(true);
      }
    };
    if (id && bookedDays.length === 0) {
      fetchBookings();
    }
  }, [id, bookedDays.length]);

  const handleSelect = (ranges) => {
    setDateRange([ranges.selection]);
  
    const start = ranges.selection.startDate;
    const end = ranges.selection.endDate;
    const dates = [];
    let currentDate = new Date(start);
    while (currentDate <= end) {
      const formattedDate = currentDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
      });
      dates.push(formattedDate);
      currentDate.setDate(currentDate.getDate() + 1);
    }
    setSelectedDates(dates);
  };
  const joe = useSelector(state => state)
  console.log(joe)
  const handlePageRelocate = () => {
  
    dispatch(setCheckoutBookedDays(selectedDates));
    dispatch(setCar(singleCar));

    navigate(`/checkout/`);
  };

  return (
    <div className='flex'>
      {isLoading ? (
        <div className='loading-spinner'></div> // Replace with your loading spinner component
      ) : isError ? (
        <p>Error occurred while fetching bookings.</p>
      ) : (
        <DateRangePicker
          ranges={dateRange}
          onChange={handleSelect}
          minDate={new Date()}
          disabledDates={bookedDays}
        />
      )}
      <div>
        <button
          onClick={handlePageRelocate}
          className='review-submit-btn'
          disabled={!dateRange[0].startDate || !dateRange[0].endDate || bookedDays.includes(dateRange[0].startDate)}
        >
          asdsdsdsdadkaskjdlk
        </button>
      </div>
    </div>
  );
};

export default Calendar;
