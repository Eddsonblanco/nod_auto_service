import React from 'react'

export default ({ children }) => {
  console.log('render Main')

  return (
    <div>
      {children}
    </div>
  )
}
