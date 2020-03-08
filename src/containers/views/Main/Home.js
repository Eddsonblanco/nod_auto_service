import React from 'react'

import Carousel from 'components/Common/Carousel'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'

// import Companies from 'components/Companies'
import Banner from 'components/Banner/Banner'
import CardService from 'components/CardService'
import Testimony from 'components/Testimony'

const useStyles = makeStyles({
  servicesTitle: {
    marginBottom: 40
  },
  testimonials: {
    paddingTop: 60
  },
  testimonialsTitle: {
    color       : '#353535',
    fontWeight  : 600,
    marginBottom: 60
  }
})

export default function Home() {
  const classes = useStyles()

  return (
    <div>
      <Banner />
      {/* <Companies /> */}
      <Container maxWidth='lg'>
        <Typography
          align='center'
          className={classes.servicesTitle}
          component='h2'
          variant='h4'>
            Services & Repairment
        </Typography>
        <Grid container spacing={3}>
          {
            [ 1,2,3,4,5,6 ].map((item, index) => (
              <Grid
                item key={index} md={4}
                xs={6}>
                <CardService />
              </Grid>
            ))
          }
        </Grid>
      </Container>

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
            centerMode   : true,
            centerPadding: '-250px',
            infinite     : true,
            marginInitial: '-250px',
            responsive   : [
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
