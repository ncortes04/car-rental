import React from 'react'

const Adminpanel = () => {
  return (
    <div className='flex'>
        <div className=' menu-side-container flex col pd2 white'>
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
          <div className=' flex shorflex1'>
            {/* details rental container */}
            <div className='white shorflex1 flex col'>
              <div className='pd1 br1 header-container'>
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
              </div>
            </div>
            <div className='bg-grey flex shorflex1 col gap2'>
              <div className='br1 pd2 white shorflex1 bd1'>
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
              <div className='white br1 pd2 shorflex1 bd1'>
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
    </div>
  )
}

export default Adminpanel