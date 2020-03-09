import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography
} from '@material-ui/core'

const styles = makeStyles(theme => (
  {
    container: {
      paddingBottom: 20,
      paddingTop   : 20
    },
    title: {
      color       : theme.palette.primary.main,
      marginBottom: theme.spacing(3)
    }
  }
))

const ContainerAdmin = ({ children, title }) => {
  const classes = styles()

  return (
    <Container
      maxWidth='auto'
      style={{
        backgroundColor: '#fff'
      }}>
      <Grid className={classes.container} container>
        <Typography className={classes.title} variant='h5'>{title}</Typography>
        {children}
      </Grid>
    </Container>
  )
}

export default ContainerAdmin
