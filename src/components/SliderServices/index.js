import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

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

const SliderServices = ({
  data
}) => {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.sliderServiceContainer}>
        <div className={classes.sliderServiceLeft}>
          <span />
          <Typography className={classes.titleLeft}>{data.message_left}</Typography>
        </div>
        <div className={classes.sliderServiceCenter}>
          <div className={classes.sliderServiceImg}>
            <img src={data.message_image} />
          </div>
        </div>
        <div className={classes.sliderServiceRight}>
          <img src={data.message_icon} />
          <Typography className={classes.sliderServiceTitle}>{data.message_title}</Typography>
          <Typography className={classes.sliderServiceDesc}>
            {data.message_desc}
          </Typography>
          <Button
            color='primary' component={RouterLink}
            to={data.message_link} variant='contained'>Show more</Button>
        </div>
      </div>
    </Container>
  )
}

export default SliderServices
