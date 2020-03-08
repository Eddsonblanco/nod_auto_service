import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button, Container } from '@material-ui/core'

const useStyles = makeStyles(theme =>({

  CallToAction: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
    color        : theme.palette.common.white,
    fontWeight   : 300,
    paddingBottom: 6,
    paddingTop   : 6
  },
  backgroundImg: {
    backgroundRepeat: 'noRepeat',
    backgroundSize  : 'contain',
    height          : '100%',
    left            : 0,
    position        : 'absolute',
    top             : 0,
    width           : '100%'
  },
  containerBanner: {
    height: '100%'
  },
  contentBanner: {
    fontSize    : '0.9rem',
    marginBottom: 30
  },
  titleBanner: {
    fontSize    : '2.3rem',
    fontWeight  : '900',
    lineHeight  : '4rem',
    marginBottom: 30

  },
  wrapperBanner: {
    alignItems: 'center',
    color     : theme.palette.common.white,
    height    : 800,
    position  : 'relative'
  },
  wrapperTextBanner: {
    alignContent  : 'center',
    color         : theme.palette.common.white,
    display       : 'flex',
    flexDirection : 'column',
    height        : '100%',
    justifyContent: 'center',
    position      : 'relative',
    width         : '50%'
  }

}))

export default function banner() {
  const classes = useStyles()

  return (

    <div className={classes.wrapperBanner}>
      <Container className={classes.containerBanner} maxWidth='lg'>
        <img className={classes.backgroundImg} src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/07a463cc-2270-4ed1-a8ef-cc0a75448fc7.png'></img>
        <div className={classes.wrapperTextBanner}>
          <Typography className={classes.titleBanner}> Energistically morph open-source technologies
            rather than transparent technologies </Typography>
          <Typography className={classes.contentBanner}> Competently maintain holistic internal or "organic" sources via compelling benefits.
            Collaboratively engage error-free paradigms rather than. </Typography>
          <Button className={classes.CallToAction} variant='outlined'> GET AN APPOIMENT NOW </Button>
        </div>
      </Container>
    </div>
  )
}

