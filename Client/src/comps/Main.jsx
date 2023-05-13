import React, { useEffect, useState } from 'react'

import Recent from './Recent'
import Recommended from './Recommended'
import { useNavigate } from 'react-router'
import Popular from './Popular'


const Main = () => {
  const navigate = useNavigate()
  return (
    <div className='main-container'>
          <Popular/>
          <Recent/>
          <Recommended/>        
    </div>
  )
}

export default Main