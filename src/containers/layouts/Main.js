import React from 'react'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'

export default ({ children }) => {
  console.log('render Main')

  return (
    <div>
      <Header />

      {children}
      <Footer />

    </div>
  )
}
