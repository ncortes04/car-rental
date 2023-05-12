import React,{useEffect, useState} from 'react';
import PieChart from './PieChart'
const Top5 = ({ topData }) => {
    const [percentArr, setPercentArr] = useState([]);

    useEffect(() => {
      if (topData) {
        getPercentile();
      }
    }, [topData]);
  
    const getPercentile = function() {
      let sum = topData.sum.reduce((a, b) => a + b, 0);
      const calculatedPercentArr = topData.sum.map(
        (rank) => rank / sum
      );
      setPercentArr(calculatedPercentArr);
    };
  
    if (!topData) {
      // Loading state when props haven't been passed yet
      return <div>Loading...</div>;
    }
    const rankColors = ['#0D3559', '#175D9C', '#2185DE','#63A9E8','#A6CEF2' ]
  return (
    <div className='br1 pd2 white'>
      <div className='header-container'>
        <h3 className='header-h3'>Top 5 Car rentals</h3>
      </div>

      <div className='flex chart-statistics-container gap2'>
         <PieChart labelsArr={topData.popularCars} dataArr={percentArr}/>
        <div className='shorflex1'>
          <div className='height100 flex col justsr'>
            {topData.popularCars.map((car, index) => (
             <>
                <div className='top-car-rental-div' key={car.Car.id}>
                    <div className='flex gap1'>
                        <span className='top5-circle' style={{backgroundColor: rankColors[index] }}></span>
                        <p className='text-light mg0 pd0'>{car.Car.make}</p>
                        <p className='text-light mg0 pd0'>{car.Car.model}</p>
                    </div>
                        <p className='text-bold mg0 pd0'>{topData.sum[index]}</p>
                    </div>
             </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top5;
