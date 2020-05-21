import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'
import { useComponentWillMount } from 'lib/hooks'

import Carousel from 'components/Common/Carousel'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography,
  Button
} from '@material-ui/core'

// import Companies from 'components/Companies'
import Banner from 'components/Banner/Banner'
import CardService from 'components/CardService'
import Testimony from 'components/Testimony'

import companiesDucks from 'reducers/companies'
import pageHomeDucks from 'reducers/pagehome'
import SliderServices from 'components/SliderServices'

const {
  getCompanies
} = companiesDucks.creators

const {
  getPageConfig
} = pageHomeDucks.creators

const useStyles = makeStyles(theme => ({
  bannerPrincipal: {
    '& .slick-initialized .slick-slide': {
      margin: '0 !important'
    },
    '& .slick-slide > div': {
      padding: '0 !important'
    }
  },
  brandContainer: {
    display       : 'flex',
    justifyContent: 'flex-end',
    marginTop     : '-100px',
    position      : 'relative',
    zIndex        : 4
  },
  brandItem: {
    '& img': {
      width: '100%'
    },
    boxSizing                     : 'content-box',
    maxWidth                      : 120,
    padding                       : '0 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '0 10px'
    }
  },
  brandList: {
    background                    : 'black',
    backgroundColor               : '#ffffff',
    border                        : 'solid 1px #d5d5d5',
    borderRadius                  : '10px 0 0 10px',
    boxShadow                     : '6px 30px 68px 0 rgba(0, 0, 0, 0.12)',
    display                       : 'flex',
    maxWidth                      : '60%',
    overflow                      : 'hidden',
    width                         : '100%',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%'
    }
  },
  btnAllServices: {
    display       : 'flex',
    justifyContent: 'center',
    marginTop     : 50
  },
  containerServices: {
    display            : 'grid',
    gridGap            : '30px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 360px))',
    justifyContent     : 'center'
  },
  servicesTitle: {
    fontWeight  : '600',
    marginBottom: 40,
    marginTop   : 30
  },
  testimonials: {
    paddingTop: 60
  },
  testimonialsTitle: {
    color       : '#353535',
    fontWeight  : 600,
    marginBottom: 60
  }
}))

export default function Home() {
  const dispatch = useDispatch()
  const classes = useStyles()

  useComponentWillMount(() => {
    dispatch(getPageConfig())
  })

  const {
    status: statusCompanies,
    rows: companies
  } = useSelector(state => state.companies)

  const {
    status: satusPage,
    show_banner,
    show_brands,
    banners,
    // show_newsletter,
    show_services,
    show_testimonials,
    testimonials,
    services
  } = useSelector(state => state.page_home)

  useEffect(() => {
    if(statusCompanies === 'NEW')
      dispatch(getCompanies())
  }, [ statusCompanies ])

  useEffect(() => {
    if(satusPage === 'NEW')
      dispatch(getPageConfig())
  }, [ satusPage ])

  return (
    <div>
      {
        show_banner ?
          <div className={classes.bannerPrincipal}>
            <Carousel settings={{
              arrows  : false,
              autoplay: true,
              infinite: true,
              rows    : 1
            }}>
              {banners.map((item, index) => (
                <Banner data={item} key={`banner-${index}`} />
              ))}
            </Carousel>
          </div> :
          null
      }
      {
        show_brands ?
          companies.length ?
            <div className={classes.brandContainer}>
              <div className={classes.brandList}>
                {
                  companies.map((item, index) => (
                    <div className={classes.brandItem} key={index}>
                      <img alt={item.alt_text} src={item.image} />
                    </div>
                  ))
                }
              </div>
            </div> : null : null
      }

      {/* slider service detail */}
      <SliderServices />

      {/* <Services /> */}
      {
        show_services ?
          <Container maxWidth='lg'>
            <Typography
              align='center'
              className={classes.servicesTitle}
              component='h2'
              variant='h5'>
              Services & Repairment
            </Typography>
            <div className={classes.containerServices}>
              {
                services.map((item, index) => (
                  <CardService data={item} key={index} />
                ))
              }
            </div>
            <div className={classes.btnAllServices}>
              <Button
                color='primary' component={RouterLink}
                to='/services' variant='contained'>SEE ALL SERVICES</Button>
            </div>
          </Container> : null
      }

      {/* testimonials */}
      {
        show_testimonials ?
          <Container className={classes.testimonials} maxWidth={false}>
            <Typography
              align='center'
              className={classes.testimonialsTitle}
              variant='h5'>
          What people say about us
            </Typography>
            <Carousel settings={
              {
                autoplay  : true,
                centerMode: true,
                infinite  : true,
                responsive: [
                  {
                    breakpoint: 5000,
                    settings  : {
                      slidesToScroll: 1,
                      slidesToShow  : 4
                    }
                  },
                  {
                    breakpoint: 1400,
                    settings  : {
                      slidesToScroll: 1,
                      slidesToShow  : 3
                    }
                  },
                  {
                    breakpoint: 1200,
                    settings  : {
                      slidesToScroll: 1,
                      slidesToShow  : 2
                    }
                  },
                  {
                    breakpoint: 840,
                    settings  : {
                      slidesToScroll: 1,
                      slidesToShow  : 1
                    }
                  }
                ],
                rows: 1
              }
            }>
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
          </Container> : null
      }

    </div>
  )
}
