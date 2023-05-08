import React from 'react'

const Adminpanel = () => {
  return (
    <div className='flex'>
        <div className='flex col pd2'>
            <div className='admin-side-top'>
                <label className='pdb1 label-secondary'>MAIN MENU</label>
                <div className="shorflex1 br1"><p>Dashboard</p></div>
                <div className="shorflex1 br1"><p>Car Rent</p></div>
                <div className="shorflex1 br1"><p>Insight</p></div>
                <div className="shorflex1 br1"><p>Inbox</p></div>
                <div className="shorflex1 br1"><p>Calendar</p></div>
            </div>
            <div className='admin-side-bottom'>
                <label className='pdb1 label-secondary'>PREFERNCES</label>
                <div className="shorflex1 br1"><p>Settings</p></div>
                <div className="shorflex1 br1"><p>Help & Center</p></div>
                <div className="shorflex1 br1"><p>Dark Mode</p></div>
            </div>
            <p>Logout</p>
        </div>
        <div className='flex shorflex1'>
          <div className='white shorflex1'>
            s
          </div>
          <div className='white flex shorflex1 col gap2'>
            <div className='white shorflex1 bd1'>
              <div className='header-container'>
                <h3 className='header-h3'>Top 5 Car rentals</h3>
              </div>
              <div className='flex'>
                <div className='shorflex1'>s</div>
                <div className='shorflex1'>
                      <div className='shorflex1'>

                      </div>
                      <div className='shorflex1 flex col gap1'>
                          <div className="top-car-rental-div">
                            <div className='flex gap1'>
                                <span></span>
                                <p className='text-light'>Sports Car</p>
                            </div>
                            <p className='text-bold'>14,212</p>
                          </div>
                          <div className="top-car-rental-div">
                            <div className='flex gap1'>
                                <span></span>
                                <p className='text-light'>Sports Car</p>
                            </div>
                            <p className='text-bold'>14,212</p>
                          </div>
                          <div className="top-car-rental-div">
                            <div className='flex gap1'>
                                <span></span>
                                <p className='text-light'>Sports Car</p>
                            </div>
                            <p className='text-bold'>14,212</p>
                          </div>
                          <div className="top-car-rental-div">
                            <div className='flex gap1'>
                                <span></span>
                                <p className='text-light'>Sports Car</p>
                            </div>
                            <p className='text-bold'>14,212</p>
                          </div>
                          <div className="top-car-rental-div">
                            <div className='flex gap1'>
                                <span></span>
                                <p className='text-light'>Sports Car</p>
                            </div>
                            <p className='text-bold'>14,212</p>
                          </div>
                      </div>
                    </div>
              </div>
            </div>
            <div className='shorflex1 bd1'>
              <div className='header-container'>
                <h3 className='header-h3'>Recent Transactions</h3>
              </div>
              <div className='flex col'>
                  <div className='recent-transaction-card bb-grey'>
                    <div className='flex'>
                      <img className='red shorflex1'></img>
                      <div className='flex col'>
                          <p className='text-bold'>car.name</p>
                          <p className='text-light'>car.type</p>
                      </div>
                    </div>
                    <div className='flex col'>
                        <p className='text-light'>19 July</p>
                        <p className='text-bold'>$99.00</p>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Adminpanel