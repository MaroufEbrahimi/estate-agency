import React from 'react'

import './Agent.css'

const Agent = (props) => {
  return (
     <div className='agent'>
        <div className='agent_img'>
           <img src={props.img} />
        </div>
    </div>
  )
}

export default Agent