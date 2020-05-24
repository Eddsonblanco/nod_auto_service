import React from 'react'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography
} from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'

const useStyles = makeStyles(theme =>  ({
  aboutEnd: {
    background: '#f5f5f5',
    marginTop : 80,
    padding   : '40px 0 50px 0'
  },
  aboutEndParagraphLeft: {
    '& p': {
      flex: 1
    },
    display: 'flex'
  },
  aboutList: {
    '& li': {
      '& p': {
        color     : '#353535',
        fontSize  : 14,
        fontWeight: 600,
        lineHeight: 1.38
      },
      '& span': {
        alignItems    : 'center',
        background    : theme.palette.primary.main,
        borderRadius  : '50%',
        color         : '#fff',
        display       : 'flex',
        height        : 40,
        justifyContent: 'center',
        marginRight   : 10,
        padding       : 10,
        width         : 40
      },
      alignItems  : 'center',
      display     : 'flex',
      marginBottom: 20,
      width       : '50%'
    },
    display                       : 'flex',
    flexWrap                      : 'wrap',
    listStyle                     : 'none',
    [theme.breakpoints.down('md')]: {
      marginTop: 30
    }
  },
  bardEnd: {
    background : theme.palette.primary.main,
    display    : 'block',
    height     : 3,
    marginRight: 15,
    width      : 80
  },
  contentInageMarco: {
    '& img': {
      left                          : 20,
      marginBottom                  : 30,
      paddingRight                  : 30,
      position                      : 'relative',
      top                           : 20,
      width                         : '100%',
      zIndex                        : 2,
      [theme.breakpoints.down('md')]: {
        paddingRight: 0,
        width       : 'calc(100% - 30px)'
      }
    },
    '& span': {
      background: theme.palette.primary.main,
      height    : 160,
      left      : 0,
      position  : 'absolute',
      top       : 0,
      width     : 160,
      zIndex    : 1
    },
    position: 'relative'
  },
  paragraph: {
    color       : '#353535',
    fontSize    : 14,
    fontWeight  : 300,
    lineHeight  : 1.78,
    marginBottom: 20,
    textAlign   : 'left'
  },
  subTitleAboutEnd: {
    color       : '#f64e4e',
    fontSize    : 16,
    fontWeight  : 600,
    lineHeight  : 1.29,
    marginBottom: 30
  },
  title: {
    color       : '#353535',
    fontSize    : 26,
    fontWeight  : 600,
    lineHeight  : 1.13,
    marginBottom: 30,
    marginTop   : 60
  },
  titleAboutEnd: {
    color       : '#353535',
    fontSize    : 20,
    fontWeight  : 'normal',
    lineHeight  : 1.13,
    marginBottom: 10
  },
  wrapper: {
    display                     : 'grid',
    [theme.breakpoints.up('md')]: {
      gridGap            : 70,
      gridTemplateColumns: '1fr 1fr'
    }
  },
  wrapperEnd: {
    display                     : 'grid',
    [theme.breakpoints.up('md')]: {
      gridGap            : 120,
      gridTemplateColumns: '1fr 1fr'
    }
  }
}))

export default function AboutUs() {
  const classes = useStyles()

  return (
    <>
      <Container>
        <Typography className={classes.title}>About us</Typography>
        <div className={classes.wrapper}>
          <div>
            <Typography className={classes.paragraph}>
            Efficiently provide access to one-to-one "outside
             the box" thinking after corporate e-business.
             Globally maintain world-class alignments via
              client-centered action items. Synergistically
               engineer proactive technology and ethical niches. Enthusiastically evolve.
            </Typography>

            {/* <div>
              <span></span>
              <Typography>Our story</Typography>
            </div> */}

            <div className={classes.contentInageMarco}>
              <span></span>
              <img src='https://cdn.zeplin.io/5e90fee92fd59f20f20f6614/assets/CBA2194B-73EF-485C-B5E6-A0AA9894B616.png' />
            </div>
          </div>
          <div>
            <div className={classes.contentInageMarco}>
              <span>
              </span>
              <img src='https://cdn.zeplin.io/5e90fee92fd59f20f20f6614/assets/87C10837-71A7-4E14-8C37-1CEFF4297BB5.png' />
            </div>

            <Typography className={classes.paragraph}>
            Efficiently provide access to one-to-one "outside the box"
             thinking after corporate e-business. Globally maintain
              world-class alignments via client-centered action items.
               Synergistically engineer proactive technology and ethical
               niches. Enthusiastically evolve.
            </Typography>

            <Typography className={classes.paragraph}>
            Efficiently provide access to one-to-one "outside the box"
             thinking after corporate e-business. Globally maintain
             world-class alignments via client-centered action items.
             Synergistically engineer proactive technology and ethical niches.
              Enthusiastically evolve.
            </Typography>
          </div>
        </div>

        <div>

        </div>
      </Container>

      <div className={classes.aboutEnd}>
        <Container>
          <Typography className={classes.titleAboutEnd}>Full Service, Quality</Typography>
          <Typography className={classes.subTitleAboutEnd}>All your car needs in only one place</Typography>
          <div className={classes.wrapperEnd}>
            <div className={classes.aboutEndParagraphLeft}>
              <span className={classes.bardEnd}></span>
              <Typography>
                Efficiently provide access to one-to-one "outside the box"
                thinking after corporate e-business. Globally maintain world-class
                alignments via client-centered action items. Synergistically engineer
                proactive technology and ethical niches. Enthusiastically evolve.
              </Typography>
            </div>
            <div>
              <ul className={classes.aboutList}>
                <li>
                  <span>
                    <MailIcon />
                  </span>
                  <Typography>Save your time</Typography>
                </li>
                <li>
                  <span>
                    <MailIcon />
                  </span>
                  <Typography>Save your time</Typography>
                </li>
                <li>
                  <span>
                    <MailIcon />
                  </span>
                  <Typography>Save your time</Typography>
                </li>
                <li>
                  <span>
                    <MailIcon />
                  </span>
                  <Typography>Save your time</Typography>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
