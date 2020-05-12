import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Container } from '@material-ui/core'

const useStyles = makeStyles(theme =>({

  CallToAction: {
    marginTop: 40
    // '&:hover': {
    //   backgroundColor: theme.palette.primary.main
    // },
    // color        : theme.palette.common.white,
    // fontWeight   : 300,
    // paddingBottom: 6,
    // paddingTop   : 6
  },
  backgroundImg: {
    height        : '100%',
    left          : 0,
    objectFit     : 'cover',
    objectPosition: 'center',
    position      : 'absolute',
    top           : 0,
    width         : '100%'
  },
  containerBanner: {
    alignItems: 'center',
    display   : 'flex',
    height    : '100%'
  },
  contentBanner: {
    fontSize                              : '0.9rem',
    textAlign                             : 'center',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '@media screen and (min-width: 640px)': {
      fontSize    : '1rem',
      marginBottom: 30,
      textAlign   : 'left'

    }
  },
  overlay: {
    backgroundImage: 'linear-gradient(to bottom, rgba(53, 53, 53, 0.23) 3%, rgba(246, 78, 78, 0.99))',
    height         : '100%',
    left           : 0,
    opacity        : '0.32',
    position       : 'absolute',
    top            : 0,
    width          : '100%'
  },
  titleBanner: {
    color                                 : theme.palette.common.white,
    fontSize                              : '1.2rem',
    fontWeight                            : '900',
    lineHeight                            : '30px',
    marginBottom                          : 30,
    textAlign                             : 'center',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '@media screen and (min-width: 640px)': {
      fontSize  : '1.5rem',
      lineHeight: '30px',
      textAlign : 'left'
    },
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '@media screen and (min-width: 1024px)': {
      fontSize  : '2.5rem',
      lineHeight: '60px',
      textAlign : 'left'
    }
  },
  wrapperBanner: {
    alignItems: 'center',
    color     : theme.palette.common.white,
    height    : 'calc(100vh - 100px)',
    position  : 'relative'
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    // '@media screen and(min-width: 1200px)': {
    //   height: 800
    // }

  },
  wrapperTextBanner: {
    // alignContent  : 'center',
    color                                 : theme.palette.common.white,
    display                               : 'flex',
    flexDirection                         : 'column',
    // height        : '100%',
    justifyContent                        : 'center',
    maxWidth                              : 640,
    position                              : 'relative',
    width                                 : '100%',
    // eslint-disable-next-line sort-keys-fix/sort-keys-fix
    '@media screen and (min-width: 640px)': {
      display: 'block'
    }
  }

}))

export default function banner({ data }) {
  const classes = useStyles()

  return (

    <div className={classes.wrapperBanner}>
      <Container className={classes.containerBanner} maxWidth='lg'>
        <img alt={data.alt_text} className={classes.backgroundImg} src={data.image} />
        <div className={classes.overlay} />
        <div className={classes.wrapperTextBanner}>
          <Typography className={classes.titleBanner}>{data.title}</Typography>
          <Typography className={classes.contentBanner}>{data.sub_title}</Typography>
          <Button className={classes.CallToAction} color='primary' variant='contained'> GET AN APPOIMENT NOW </Button>
        </div>
      </Container>
    </div>
  )
}

