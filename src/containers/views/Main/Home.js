import React from 'react'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography,
  Grid
} from '@material-ui/core'

// import Companies from 'components/Companies'
import Banner from 'components/Banner/Banner'
import CardService from 'components/CardService'

const useStyles = makeStyles({
  servicesTitle: {
    marginBottom: 40
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
    </div>
  )
}
