import React from 'react'

import { makeStyles } from '@material-ui/styles'
import {
  Typography,
  Button,
  Container
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  sliderServiceCenter: {
    '& img': {
      marginTop: 40
    },
    background  : theme.palette.primary.main,
    borderRadius: 12,
    height      : 360,
    margin      : '0 50px',
    maxWidth    : 640,
    width       : '100%'
  },
  sliderServiceContainer: {
    alignItems                    : 'center',
    display                       : 'flex',
    justifyContent                : 'center',
    margin                        : '100px 0 200px 0',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    }
  },
  sliderServiceDesc: {
    color        : '#353535',
    fontSize     : '0.875rem',
    fontWeight   : 'normal',
    letterSpacing: 'normal',
    lineHeight   : 1.5,
    marginBottom : 30,
    textAlign    : 'left'
  },
  sliderServiceImg: {
    display       : 'flex',
    justifyContent: 'center'
  },
  sliderServiceLeft: {
    '& > p': {
      flex: 1
    },
    '& span': {
      '&:after': {
        background: '#fff',
        content   : '""',
        height    : '35%',
        left      : 0,
        position  : 'absolute',
        top       : '0',
        width     : '100%'
      },
      '&:before': {
        background: '#fff',
        bottom    : '0',
        content   : '""',
        height    : '35%',
        left      : 0,
        position  : 'absolute',
        width     : '100%'
      },
      background : 'red',
      display    : 'block',
      marginRight: 35,

      position                      : 'relative',
      // height    : '50%',
      width                         : 3,
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    display                       : 'flex',
    maxWidth                      : 290,
    width                         : '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  sliderServiceRight: {
    maxWidth                      : 410,
    width                         : '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 150
    }
  },
  sliderServiceTitle: {
    color       : '#353535',
    fontStyle   : 'normal',
    fontWeight  : 500,
    lineHeight  : 1.45,
    marginBottom: '1rem',
    marginTop   : 4
  },
  titleLeft: {
    color                         : '#353535',
    fontSize                      : '1.25rem',
    fontWeight                    : 600,
    lineHeight                    : 1.5,
    paddingRight                  : 40,
    textAlign                     : 'left',
    [theme.breakpoints.down('sm')]: {
      paddingBottom: 40,
      paddingRight : 0,
      textAlign    : 'center'
    }
  }
}))

const SliderServices = () => {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.sliderServiceContainer}>
        <div className={classes.sliderServiceLeft}>
          <span />
          <Typography className={classes.titleLeft}>Life’s too
            short
            to spend it at the repair shop</Typography>
        </div>
        <div className={classes.sliderServiceCenter}>
          <div className={classes.sliderServiceImg}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/4d57eb34-10bd-4d25-8947-83c40d90a6d7.png' />
          </div>
        </div>
        <div className={classes.sliderServiceRight}>
          <img src='https://cdn.zeplin.io/5e90fee92fd59f20f20f6614/assets/F1F60BC7-0E88-4DBC-93FE-CA91DD09D65B.svg' />
          <Typography className={classes.sliderServiceTitle}>Oil change at home</Typography>
          <Typography className={classes.sliderServiceDesc}>
            Enjoy convenient car repair and maintenance at your home or office.
            <br />
            It's as easy as 1-2-3.
          </Typography>
          <Button color='primary' variant='contained'>Show more</Button>
        </div>
      </div>
    </Container>
  )
}

export default SliderServices
