import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
// import clsx from 'clsx'
import Carousel from 'components/Common/Carousel'

import { HTMLRenderer } from '@react-page/renderer'
import '@react-page/core/lib/index.css' // we also want to load the stylesheets
// Require editor ui stylesheet
import '@react-page/ui/lib/index.css'

// Load some exemplary plugins:
import slate from '@react-page/plugins-slate' // The rich text area plugin
import '@react-page/plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin
import background from '@react-page/plugins-background' // A plugin for background images
import '@react-page/plugins-background/lib/index.css' // Stylesheets for  background layout plugin
import { imagePlugin } from '@react-page/plugins-image'
import spacer from '@react-page/plugins-spacer'

import {
  Container,
  Breadcrumbs,
  Link,
  Typography
} from '@material-ui/core'
import Testimony from 'components/Testimony'

import servicesDucks from 'reducers/main/services'
import pageHomeDucks from 'reducers/pagehome'

const plugins = {
  content: [
    slate(),
    spacer,
    imagePlugin({  })
  ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [
    background({ defaultPlugin: slate() })
  ] // Define plugins for layout cells
}

const {
  getService
} = servicesDucks.creators

const {
  getPageConfig,
  openAppoiment
} = pageHomeDucks.creators

const useStyles = makeStyles(theme => ({
  appoimentBtn: {
    '&:hover': {
      backgroundColor: '#f64e4e',
      color          : '#fff'
    },
    alignItems     : 'center',
    backgroundColor: '#f6f6f6',
    color          : '#f64e4e',
    cursor         : 'pointer',
    display        : 'inline-flex',
    fontSize       : 14,
    fontWeight     : 600,
    justifyContent : 'center',
    padding        : '7px 22px',
    textTransform  : 'uppercase'
  },
  bggray: {
    background: '#f6f6f6'
  },
  breadcrumbs: {
    marginTop: 18
  },
  breadcrumbsEnd: {
    color   : 'inherit',
    fontSize: '0.875rem'
  },
  contentTitle: {
    alignItems                    : 'center',
    display                       : 'flex',
    justifyContent                : 'space-between',
    [theme.breakpoints.down('xs')]: {
      alignItems   : 'flex-start',
      flexDirection: 'column',
      marginBottom : 20
    }
  },
  rootHtmlRender: {
    '& .ory-plugins-content-spacer.ory-plugins-content-spacer-read-only': {
      border: 'none !important'
    },
    '& img': {
      width: '100%'
    },
    backgroundColor               : '#f6f6f6',
    fontFamily                    : 'Poppins,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto',
    marginBottom                  : '100px',
    padding                       : '40px 80px',
    [theme.breakpoints.down('sm')]: {
      padding: '40px 20px'
    }
  },
  separator: {
    backgroundColor: '#f64e4e',
    borderRadius   : '50%',
    height         : '6px',
    width          : '6px'
  },
  testimonialsTitle: {
    color       : '#353535',
    fontWeight  : 600,
    marginBottom: 60
  },
  titleService: {
    color     : '#353535',
    fontFamily: 'Poppins',
    fontSize  : '1.5rem',
    fontWeight: '600',
    margin    : '30px 0 30px 0'
  }
}))

export default function Services() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    location: {
      pathname
    }
  } = useSelector(state => state.router)

  const {
    service = {}
  } = useSelector(state => state.main_services)

  const {
    status: statusHome,
    testimonials
  } = useSelector(state => state.page_home)

  useEffect(() => {
    dispatch(getService(pathname.replace('/service/', '')))
  }, [])

  useEffect(() => {
    if(statusHome === 'NEW')
      dispatch(getPageConfig())
  }, [])

  return (
    <>
      <Container>
        <Breadcrumbs
          aria-label='breadcrumb' className={classes.breadcrumbs}
          separator={<span className={classes.separator} />}>
          <Link color='inherit' href='/'>
          Home
          </Link>
          <Link color='inherit' href='/services'>
            All services
          </Link>
          <Typography className={classes.breadcrumbsEnd} color='textPrimary'>{service.title}</Typography>
        </Breadcrumbs>

        <div className={classes.contentTitle}>
          <Typography className={classes.titleService} variant='h4'>{service.title}</Typography>
          <div className={classes.appoimentBtn} onClick={() => dispatch(openAppoiment())}>
            <span>
              i need this service now
            </span>
          </div>
        </div>

      </Container>

      <div className={classes.bggray}>

        <Container>
          {
            service.content ?
              <div className={classes.rootHtmlRender}>
                <HTMLRenderer
                  plugins={plugins} state={JSON.parse(service.content)} />
              </div> : null

          }
        </Container>

      </div>

      {/* testimonials */ }
      {
        // show_testimonials ?
        <Container className={classes.testimonials} maxWidth={false}>
          <Typography
            align='center'
            className={classes.testimonialsTitle}
            variant='h5'>
        What people say about us
          </Typography>
          <Carousel settings={{
            autoplay  : true,
            centerMode: true,
            // centerPadding: '-250px',
            infinite  : true,
            responsive: [
              {
                breakpoint: 5000,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 3
                }
              },
              {
                breakpoint: 1300,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 2
                }
              },
              {
                breakpoint: 1024,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 1
                }
              }
            ],
            rows: 1
          }}>
            {
              testimonials.map((job, index) => (
                <div
                  key={`slide-${index}`}>
                  <Testimony
                    data={job}
                    key={`slide-${index}`} />

                  {/* <CardJob
                history={history}
                job={job}
                key={`slide-${index}`}
                type='home'
                userLogin={userLogin}
                wished={wishList.includes(job.job_id)} /> */}

                </div>
              ))
            }
          </Carousel>
        </Container>
      }
    </>
  )
}
