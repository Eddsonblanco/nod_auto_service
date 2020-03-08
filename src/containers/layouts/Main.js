import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Newsletter from 'components/Newsletter'

const styles = makeStyles({
  body: {
    background: '#fff'
  }
})

export default ({ children }) => {
  const classes = styles()

  return (
    <div className={classes.body}>
      <Header />

      {children}
      <Newsletter />
      <Footer />

    </div>
  )
}
