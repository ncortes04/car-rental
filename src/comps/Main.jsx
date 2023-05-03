import React from 'react'

const Main = () => {
  return (
    <div className='main-container'>
        <div className='popular-div'>
           <div className='popular-header'>
                <h3>Popular Cars</h3>
                <a>View All</a>
           </div>
           <div className='main-flex'>
                <div className='car-card'>
                    <div className='card-header'>
                        <div>
                            <p className='card-car-name'>car.name</p>
                            <button className='liked'>

                            </button>
                        </div>
                        <p>car.type</p>
                    </div>
                    <div className='card-main-content'>
                        <img></img>
                        <div className='card-secondary-div'>
                            <div className='card-secondary-info'>
                                <img></img>
                                <p></p>
                            </div>
                        </div>
                    </div>  
                </div>
           </div>
        </div>
        
    </div>
  )
}

export default Main