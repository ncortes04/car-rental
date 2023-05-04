import React, { useState } from 'react'
import swap from '../assets/Swap.svg'
import blueMark from '../assets/mark.svg'
import redMark from '../assets/redmark.svg'
import arrowDown from '../assets/arrow-down.svg'

const PickDrop = () => {
  const [settings, setSettings] = useState({l1: false, d1: false, t1: false,l2: false, d2: false, t2: false})
  const [swapTogg, setSwapTogg] = useState(false)
  var handleToggle = function(key){
    setSettings({
      ...settings,
      [key] : !settings[key]
    })
  }
  var handleToggleSwap = function(){
    setSwapTogg((prev) => !prev)
  }
  return (
    <div className={swapTogg ? 'pick-drop-container reverse' : 'pick-drop-container'}>
      <div className='pickdrop-child-container'>
        <div>
        <div className='pickdrop-title'>
          <img src={blueMark}></img>
          <h3>Pick-Up</h3>
        </div>
        <div className='pickdrop-settings-div'>
          <div className='settings-sub-div'>
            <p className='settings-title'>Locations</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your City</p>
              <button
              className='toggle-drop-settings-btn'
              name="l1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.l1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
          <div className='settings-sub-div-border'>
            <p className='settings-title'>Date</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your Date</p>
              <button
              className='toggle-drop-settings-btn'
              name="d1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.d1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
          <div className='settings-sub-div'>
            <p className='settings-title'>Time</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your Time</p>
              <button
              className='toggle-drop-settings-btn'
              name="t1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.t1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
      <button 
      onClick={handleToggleSwap}
      className='reverse-pick-btn'>
        <img src={swap} alt='pick/drop swap'></img>
      </button>
      <div className='pickdrop-child-container'>
        <div>
        <div className='pickdrop-title'>
        <img src={redMark}></img>
        <h3>Drop-Off</h3>
      </div>
      <div className='pickdrop-settings-div'>
          <div className='settings-sub-div'>
            <p className='settings-title'>Locations</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your City</p>
              <button
              className='toggle-drop-settings-btn'
              name="l1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.l1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
          <div className='settings-sub-div-border'>
            <p className='settings-title'>Date</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your Date</p>
              <button
              className='toggle-drop-settings-btn'
              name="d1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.d1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
          <div className='settings-sub-div'>
            <p className='settings-title'>Time</p>
            <div className='pickdrop-settings-secondary-div'>
              <p className='settings-secondary-p'>Select Your Time</p>
              <button
              className='toggle-drop-settings-btn'
              name="t1"
              onClick={(e) => handleToggle(e.target.name)}
              >
                <img src={arrowDown} className={settings.t1 ? 'arrow active' : "arrow"}/>
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default PickDrop