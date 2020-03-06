import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({
  date: {
  },
  description: {
    color   : '#353535',
    fontSize: '1.125rem',
    opacity : 0.89
  },
  root: {
    borderColor : '#d5d5d5',
    borderRadius: 12,
    maxWidth    : 750,
    minWidth    : 275,
    padding     : '30px 50px'
  }
})

const Testimony = () => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.description} component='p' variant='body2'>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
          sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
          At vero eos et accusam et justo duo dolores et ea.
        </Typography>
        <Typography
          align='right'
          className={classes.date}
          color='primary'
          component='p'>
          Kathleen Harvell, 02/20/2020
        </Typography>
      </CardContent>
    </Card>
  )
}

export default Testimony
