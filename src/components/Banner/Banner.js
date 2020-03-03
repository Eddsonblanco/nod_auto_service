import React from 'react'
import sample from '../Common/videoBanner/videoBanner.mp4'

const Banner = () => {
  return (
    <video
      autoPlay className='videoTag' loop
      muted width='100%'>
      <source src={sample} type='video/mp4' />
    </video>
  )
}

export default Banner
