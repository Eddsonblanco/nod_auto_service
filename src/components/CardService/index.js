import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Typography,
  IconButton
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles({
  bullet: {
    display  : 'inline-block',
    margin   : '0 2px',
    transform: 'scale(0.8)'
  },
  description: {
    maxWidth: 250
  },
  pos: {
    marginBottom: 12
  },
  root: {
    '&:hover': {
      '& $description': {
        color: '#fff'
      },
      '& $title': {
        color: '#fff'
      },
      background : 'rgba(246, 78, 78, 0.57)',
      borderColor: 'rgba(246, 78, 78, 0.57)',
      boxShadow  : '0 3px 20px 0 rgba(0, 0, 0, 0.16)',
      cursor     : 'pointer'
      // transform   : 'scale(1.1)'
    },
    borderColor : '#d5d5d5',
    borderRadius: 12,
    minWidth    : 275
  },
  title: {
    color        : '#353535',
    fontSize     : '1.125rem',
    fontWeight   : 600,
    letterSpacing: 'normal',
    lineHeight   : 1.22,
    marginBottom : 10,
    textAlign    : 'left'
  }
})

export default function CardService() {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography className={classes.title} color='textSecondary' gutterBottom>
          Suspensión repair
        </Typography>
        <Typography className={classes.description} component='p' variant='body2'>
          Enjoy convenient car repair and maintenance at your home or office.
          It's as easy as 1-2-3.
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <ArrowForwardIosIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
