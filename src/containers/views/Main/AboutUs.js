import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography
} from '@material-ui/core'

import MailIcon from '@material-ui/icons/Mail'

import aboutsDucks from 'reducers/abouts'

const {
  getAbouts
} = aboutsDucks.creators

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
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    status,
    block1,
    block2,
    block3,
    image1,
    image2,
    paragraph_end,
    sub_title_end,
    title,
    title_end
  } = useSelector(state => state.abouts)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getAbouts())
  }, [])

  return (
    <>
      <Container>
        <Typography className={classes.title}>{title}</Typography>
        <div className={classes.wrapper}>
          <div>
            <Typography className={classes.paragraph}>
              {block1}
            </Typography>

            {/* <div>
              <span></span>
              <Typography>Our story</Typography>
            </div> */}

            {
              image1 &&
              <div className={classes.contentInageMarco}>
                <span></span>
                <img src={image1} />
              </div>
            }
          </div>
          <div>
            {
              image2 &&
              <div className={classes.contentInageMarco}>
                <span>
                </span>
                <img src={image2} />
              </div>
            }

            <Typography className={classes.paragraph}>
              {block2}
            </Typography>

            <Typography className={classes.paragraph}>
              {block3}
            </Typography>
          </div>
        </div>

        <div>

        </div>
      </Container>

      <div className={classes.aboutEnd}>
        <Container>
          <Typography className={classes.titleAboutEnd}>{title_end}</Typography>
          <Typography className={classes.subTitleAboutEnd}>{sub_title_end}</Typography>
          <div className={classes.wrapperEnd}>
            <div className={classes.aboutEndParagraphLeft}>
              <span className={classes.bardEnd}></span>
              <Typography>
                {paragraph_end}
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
