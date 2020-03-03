import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { CssBaseline, Button, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  header: {
    background: 'gray',
    width     : '100%'
  },
  headerContainer: {
    '& > div': {
      width: '100%'
    },
    background: 'orange',
    display   : 'flex',
    height    : 100,
    margin    : ' 0 auto',
    width     : '90%'
  },

  headerLogoContainer: {
    alignItems    : 'center',
    background    : 'white',
    display       : 'flex',
    height        : '100%',
    justifyContent: 'flex-start',
    width         : '25%'
    // margin

  }

})

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <CssBaseline />
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <div className={classes.headerLogoContainer}>
            <img alt='logo' className={classes.headerLogo}  src='' />
          </div>
        </div>
        <div className={classes.headerRight}>
          <Typography>Phone</Typography>
          <Button color='primary' variant='contained'>
            action
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
