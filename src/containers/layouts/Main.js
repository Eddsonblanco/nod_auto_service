import React from 'react'
import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Newsletter from 'components/Newsletter'

export default ({ children }) => {
  console.log('render Main')

  return (
    <div>
      <Header />

      {children}
      <Newsletter />
      <Footer />

    </div>
  )
}
