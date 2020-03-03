import React from 'react'
import sample from '../Common/videoBanner/videoBanner.mp4';


const Banner = () => {

  
    return (
        <video width='100%' className='videoTag' autoPlay loop muted>
            <source src={sample} type='video/mp4' />
        </video>
      )
  }
  
  export default Banner
  