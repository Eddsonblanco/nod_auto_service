import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Button } from '@material-ui/core'
import { red } from '@material-ui/core/colors'
import { FullscreenExit, CallToAction } from '@material-ui/icons'

const useStyles = makeStyles(theme =>({

  CallToAction: {
    color        : theme.palette.common.white,
    fontWeight   : 300,
    paddingBottom: 6,
    paddingTop   : 6
  },
  backgroundImg: {
    height  : '100%',
    left    : 0,
    position: 'absolute',
    top     : 0,
    width   : '100%'
  },
  contentBanner: {
    fontSize: '1rem'
  },
  titleBanner: {
    fontSize: '2.5rem'

  },
  wrapperBanner: {
    alignItems   : 'center',
    color        : theme.palette.common.white,
    display      : 'flex',
    flexDirection: 'column',
    height       : 800,
    position     : 'relative'
  },
  wrapperTextBanner: {
    color   : theme.palette.common.white,
    position: 'relative'
  }

}))

export default function banner() {
  const classes = useStyles()

  return (
    <div className={classes.wrapperBanner}>
      <img className={classes.backgroundImg} src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/07a463cc-2270-4ed1-a8ef-cc0a75448fc7.png'></img>
      <div className={classes.wrapperTextBanner}>
        <Typography className={classes.titleBanner}> Energistically morph open-source technologies rather than transparent technologies </Typography>
        <Typography className={classes.contentBanner}> Competently maintain holistic internal or "organic" sources via compelling benefits. Collaboratively engage error-free paradigms rather than. </Typography>
      </div>
      <Button className={classes.CallToAction} variant='outlined'> GET AN APPOIMENT NOW </Button>
    </div>
  )
}

