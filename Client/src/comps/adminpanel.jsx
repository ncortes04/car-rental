import React,{useState, useEffect} from 'react'
import { addCar, getTop5, getRecent } from '../utils/apiRoutes';
import Top5 from './Top5';

const Adminpanel = () => {
    const [carInfo, setCarInfo] = useState({
      year: '',
      color: '',
      dailyPrice: '',
      image: '',
      tank: '',
      type: '',
      capacity: '',
      transmission: '',
      description: ''
    });
    const [statistics, setStatistics] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const topResponse = await getTop5()
        const topData = await topResponse.json();
        const recentResponse = await getRecent()
        const recentData = await recentResponse.json();
        setStatistics({topData, recentData});
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  function currentTime(date){
    const options = { year: "numeric", month: "long", day: "numeric", hour:"numeric", minute: 'numeric'}
    return new Date(date).toLocaleDateString(undefined, options)
}
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setCarInfo(prevCarInfo => ({
        ...prevCarInfo,
        [name]: value
      }));
    }
  
    const handleSubmit = async (e) => {
     try {
        const response = await addCar(carInfo)
        const data = await response.json()
        console.log(data)
     } catch (e) {
        console.error(e)
     }
     setCarInfo({      
      year: '',
      color: '',
      dailyPrice: '',
      image: '',
      tank: '',
      type: '',
      capacity: '',
      transmission: '',
      description: ''
    })
    }
    console.log(statistics.recentData)
  return (
    <div className='flex'>
        <div className=' menu-side-container flex col pd2 white red'>
            <div className='admin-side-top wd100'>
                <label className='pdb1 label-secondary'>MAIN MENU</label>
                <div className=" admin-menu-text shorflex1 br1"><span></span><p>Dashboard</p></div>
                <div className=" admin-menu-text shorflex1 br1"><span></span><p>Car Rent</p></div>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Insight</p></div>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Inbox</p></div>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Calendar</p></div>
            </div>
            <div className='admin-side-bottom'>
                <label className='pdb1 label-secondary'>PREFERNCES</label>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Settings</p></div>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Help & Center</p></div>
                <div className="admin-menu-text shorflex1 br1"><span></span><p>Dark Mode</p></div>
            </div>
            <p>Logout</p>
        </div>
        <div className='admin-panel-container'>
          <div className=' flex gap2 shorflex1 pd2'>
            {/* details rental container */}
            <div className='shorflex1'>
            <div className='white  shorflex1 flex col br1 pd2'>
                <div className='add-car-container pd2'>
                   <div className='mg0 br1 header-container'>
                      <h3 className='header-h3 '>Add A New Car</h3>
                  </div>
                    <div className='admin-input'>
                        <label>Make</label>
                        <input name='make' placeholder='Car Make' value={carInfo.make} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Model</label>
                        <input name='model' placeholder='Car Model' value={carInfo.model} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                      <label>Transmission</label>
                      <select className='admin-dropdown' name='transmission' value={carInfo.transmission} onChange={handleInputChange}>
                        <option value=''>Select Transmission</option>
                        <option value='automatic'>Automatic</option>
                        <option value='manual'>Manual</option>
                        <option value='CVT'>CVT</option>
                      </select>
                    </div>
                    <div className='admin-input'>
                      <label>Capacity</label>
                      <select className='admin-dropdown' name='capacity' value={carInfo.transmission} onChange={handleInputChange}>
                        <option value=''>Select Capacity</option>
                        <option value='2'>2</option>
                        <option value='4'>4</option>
                        <option value='6'>6</option>
                        <option value='8+'>8+</option>
                      </select>
                    </div>
                    <div className='admin-input'>
                      <label>Type</label>
                      <select className='admin-dropdown' name='type' value={carInfo.type} onChange={handleInputChange}>
                        <option value=''>Select Capacity</option>
                        <option value='sport'>Sport</option>
                        <option value='muscle'>Muscle</option>
                        <option value='offroad'>Offroad</option>
                        <option value='hatchback'>Hatchback+</option>
                      </select>
                    </div>
                    <div className='admin-input'>
                        <label>Year</label>
                        <input name='year' placeholder='Car Year' value={carInfo.year} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Color</label>
                        <input name='color' placeholder='Car Color' value={carInfo.color} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Daily Price</label>
                        <input name='dailyPrice' placeholder='Car Price' value={carInfo.dailyPrice} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Tank</label>
                        <input name='tank' placeholder='Car Tank' value={carInfo.tank} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Image</label>
                        <input name='image' placeholder='Car Image' value={carInfo.image} onChange={handleInputChange}></input>
                    </div>
                    <div className='admin-input'>
                        <label>Description</label>
                        <textarea name='description' placeholder='Car description' value={carInfo.description} onChange={handleInputChange}></textarea>
                    </div>
               </div>
               <button className=' mg1 button-primary' onClick={() => handleSubmit()}>Add Car</button>
              {/* <div className='pd1 br1 header-container'>
                <h3 className='header-h3'>Details Rental</h3>
              </div>
              <div className='directions-container shorflex1'>
                  <div>
                    
                  </div>
              </div>
              <div className='rental-details shorflex1 flex'>
                      <div className='flex gap2 pd2 shorflex1'>
                        <div className='car-img-small'>
                            <div>
                              
                           </div>
                        </div>
                        <div className='flex col shorflex1'>
                        <div className='flex spaceb shorflex1'>
                            <h3 className='header-h3'>order.carname</h3>
                            <p className='text-secondary mg0'>order.cartype</p>
                        </div>
                        <p className='text-secondary'>order.num</p>
                        </div>
                  </div>
              </div> */}
            </div>
            </div>
            <div className='bg-grey flex shorflex1 col gap2'>
                <Top5 topData={statistics.topData}/>
              <div className='white br1 pd2 shorflex1'>
                <div className='header-container'>
                  <h3 className='header-h3'>Recent Transactions</h3>
                </div>
                <div className='flex col'>
                  {statistics.recentData && statistics.recentData.recentPurchases.map(purchase => {
                    return(
                      <div className='recent-transaction-card bb-grey'>
                      <div className='flex'>
                        <img className='red shorflex1'></img>
                        <div className='flex col'>
                            <p className='text-bold'>{purchase.Car.make} {purchase.Car.model}</p>
                            <p className='text-light'>{purchase.Car.type}</p>
                        </div>
                      </div>
                      <div className='flex col'>
                          <p className='text-light'>{currentTime(purchase.Car.createdAt)}</p>
                          <p className='text-bold'>${purchase.Car.dailyPrice}</p>
                      </div>
                    </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Adminpanel