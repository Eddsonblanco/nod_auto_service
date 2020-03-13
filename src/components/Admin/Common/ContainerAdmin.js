import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Button
} from '@material-ui/core'

const styles = makeStyles(theme => (
  {
    btnAdd: {
      marginLeft: theme.spacing(3)
    },
    container: {
      paddingBottom: 20,
      paddingTop   : 20
    },
    title: {
      color: theme.palette.primary.main
    },
    titleContent: {
      alignItems  : 'flex-end',
      display     : 'flex',
      marginBottom: theme.spacing(3)
    }
  }
))

const ContainerAdmin = (props) => {
  const {
    children,
    title,
    btnAdd
  } = props
  const classes = styles()

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: '#fff'
      }}>
      <Grid className={classes.container} container>
        <div className={classes.titleContent}>
          <Typography className={classes.title} variant='h5'>{title}</Typography>
          {
            btnAdd.length ?
              <Button
                className={classes.btnAdd}
                color='primary'
                size='small'
                variant='outlined'>{btnAdd}</Button> : null
          }
        </div>
        {children}
      </Grid>

    </Container>
  )
}

export default ContainerAdmin
