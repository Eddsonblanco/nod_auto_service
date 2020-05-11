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
  Typography,
  Button
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
  getPageConfig
} = pageHomeDucks.creators

const useStyles = makeStyles(() => ({
  rootHtmlRender: {
    '& .ory-plugins-content-spacer.ory-plugins-content-spacer-read-only': {
      border: 'none !important'
    },
    '& img': {
      width: '100%'
    },
    backgroundColor: '#f6f6f6',
    marginBottom   : '100px',
    padding        : '40px 80px'
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
      state
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
    dispatch(getService(state.id))
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
          <Typography color='textPrimary'>{service.title}</Typography>
        </Breadcrumbs>

        <div className={classes.contentTitle}>
          <Typography className={classes.titleService} variant='h4'>{service.title}</Typography>

        </div>

        {
          service.content ?
            <div className={classes.rootHtmlRender}>
              <HTMLRenderer
                plugins={plugins} state={JSON.parse(service.content)} />
            </div> : null

        }

      </Container>

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
