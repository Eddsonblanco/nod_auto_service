import React from 'react'

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

const useStyles = makeStyles(theme => ({
  brandContainer: {
    display       : 'flex',
    justifyContent: 'flex-end',
    marginTop     : '-50px',
    position      : 'relative',
    zIndex        : 4
  },
  brandItem: {
    '& img': {
      width: '100%'
    },
    boxSizing: 'content-box',
    maxWidth : 120,
    padding  : '40px'
  },
  brandList: {
    background     : 'black',
    backgroundColor: '#ffffff',
    border         : 'solid 1px #d5d5d5',
    borderRadius   : '10px 0 0 10px',
    boxShadow      : '6px 30px 68px 0 rgba(0, 0, 0, 0.12)',
    display        : 'flex',
    maxWidth       : '75%',
    overflow       : 'hidden',
    width          : '100%'
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
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'center',
    margin        : '100px 0 200px 0'
  },
  sliderServiceImg: {
    display       : 'flex',
    justifyContent: 'center'
  },
  sliderServiceLeft: {
    maxWidth: 290,
    width   : '100%'
  },
  sliderServiceRight: {
    maxWidth: 410,
    width   : '100%'
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
  const classes = useStyles()

  return (
    <div>
      <Banner />

      <div className={classes.brandContainer}>
        <div className={classes.brandList}>
          {
            [ 1,2,3,4,5,6,7 ].map((item, index) => (
              <div className={classes.brandItem} key={index}>
                <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7c1f5df4-02f4-4b04-be23-0f7edc8885a0.png' />
              </div>
            ))
          }
        </div>
      </div>

      {/* slider service detail */}
      {/* <div className={classes.sliderServiceContainer}>
        <div className={classes.sliderServiceLeft}>
          <Typography>Life’s too <span>short</span> to spend it at the repair shop</Typography>
        </div>
        <div className={classes.sliderServiceCenter}>
          <div className={classes.sliderServiceImg}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/4d57eb34-10bd-4d25-8947-83c40d90a6d7.png' />
          </div>
        </div>
        <div className={classes.sliderServiceRight}>
          <Typography>Oil change at home</Typography>
          <Typography>
            Enjoy convenient car repair and maintenance at your home or office.
            It's as easy as 1-2-3.
          </Typography>
          <Button color='primary' variant='contained'>Ver mas info</Button>
        </div>
      </div> */}

      {/* <Services /> */}
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
            [ 1,2,3,4,5,6 ].map((item, index) => (
              <CardService key={index} />
            ))
          }
        </div>
        <div className={classes.btnAllServices}>
          <Button color='primary' variant='contained'>SEE ALL SERVICES</Button>
        </div>
      </Container>

      {/* testimonials */}
      <Container className={classes.testimonials} maxWidth={false}>
        <Typography
          align='center'
          className={classes.testimonialsTitle}
          variant='h5'>
          What people say about us
        </Typography>
        <Carousel settings={
          9 <= 3 ? {
            responsive: [
              {
                breakpoint: 5000,
                settings  : {
                  infinite      : 5 > 4,
                  slidesToScroll: 4,
                  slidesToShow  : 4
                }
              },
              {
                breakpoint: 1024,
                settings  : {
                  infinite      : 4 > 3,
                  slidesToScroll: 3,
                  slidesToShow  : 3
                }
              },
              {
                breakpoint: 920,
                settings  : {
                  infinite      : 3 > 2,
                  slidesToScroll: 2,
                  slidesToShow  : 2
                }
              },
              {
                breakpoint: 520,
                infinite  : 2 > 1,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 1
                }
              }
            ]
          } : {
            centerMode: true,
            // centerPadding: '-250px',
            infinite  : true,
            // marginInitial: '-250px',
            responsive: [
              {
                breakpoint: 5000,
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
                breakpoint: 1024,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 2
                }
              },
              {
                breakpoint: 920,
                settings  : {
                  slidesToScroll: 1,
                  slidesToShow  : 2
                }
              },
              {
                breakpoint: 520,
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
            [ 1, 2, 3, 4, 5, 6 ].map((job, index) => (
              <div
                key={`slide-${index}`}>
                <Testimony
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

    </div>
  )
}
