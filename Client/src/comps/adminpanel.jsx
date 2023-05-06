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
        <div></div>
    </div>
  )
}

export default Adminpanel