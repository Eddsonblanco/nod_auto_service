import React from 'react'

import { makeStyles } from '@material-ui/styles'
// import clsx from 'clsx'

import {
  Container,
  Breadcrumbs,
  Link,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({

})

export default function Services() {
  const classes = useStyles()

  return (
    <Container>
      <Breadcrumbs
        aria-label='breadcrumb' className={classes.breadcrumbs}
        separator={<span className={classes.separator} />}>
        <Link color='inherit' href='/'>
          Home
        </Link>
        <Typography color='textPrimary'>All Services</Typography>
      </Breadcrumbs>

      <Typography className={classes.title}>Service</Typography>

    </Container>
  )
}
