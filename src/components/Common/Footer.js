import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
  const {
    direction = '',
    email = '',
    phone = '',
    copyright = ''
  } = useSelector(state => state.settings)

  return (

    <div>
      <ul>
        <li>Redes</li>
      </ul>

      <p>{email}</p>
      <p>{phone}</p>
      <p>{direction}</p>
      <p>{copyright}</p>
    </div>
  )
}

export default Footer
