import React from 'react'

import { makeStyles } from '@material-ui/styles'

import Footer from 'components/Common/Footer'
import Companies from "components/Companies"
import Header from 'components/Common/Header'

const useStyles = makeStyles({
  '@keyframes appLogoSpin': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(360deg)'
    }
  },
  appContainer: {
    textAlign: 'center'
  },
  appHeader: {
    alignItems     : 'center',
    backgroundColor: '#282c34',
    color          : 'white',
    display        : 'flex',
    flexDirection  : 'column',
    fontSize       : 'calc(10px + 2vmin)',
    justifyContent : 'center',
    minHeight      : '100vh'
  },
  appLink: {
    color: '#61dafb'
  },
  appLogo: {
    animation: '$appLogoSpin infinite 20s linear',
    height   : '40vmin'
  }
})

export default function Home() {


  const classes = useStyles()


  return (
    <div>
      <Header />
      <Companies />
      <Footer />
    </div>
  )
}
