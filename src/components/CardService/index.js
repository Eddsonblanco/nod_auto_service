import React from 'react'
import { Link } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardActions,
  CardContent,
  Typography
} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'

const useStyles = makeStyles({
  action: {
    '& svg': {
      color   : '#fff',
      fontSize: '1rem'
    },
    alignItems    : 'center',
    background    : '#d5d5d5',
    borderRadius  : '50%',
    display       : 'flex',
    height        : 30,
    justifyContent: 'center',
    marginBottom  : 20,
    width         : 30
  },
  bullet: {
    display  : 'inline-block',
    margin   : '0 2px',
    transform: 'scale(0.8)'
  },
  contentImage: {
    '& img': {
      width: '100%'
    },
    marginBottom: 40,
    marginTop   : 40,
    maxWidth    : 40
  },
  description: {
    color     : '#353535',
    fontSize  : '0.875rem',
    fontWeight: 'normal',
    lineHeight: 1.5,
    maxWidth  : 250
  },
  pos: {
    marginBottom: 12
  },
  root: {
    '& a': {
      textDecoration: 'none'
    },
    '&:hover': {
      '& $description': {
        color: '#fff'
      },
      '& $title': {
        color: '#fff'
      },
      '& img': {
        filter: 'brightness(0) invert(1)'
      },
      background : 'rgba(246, 78, 78, 0.57)',
      borderColor: 'rgba(246, 78, 78, 0.57)',
      boxShadow  : '0 3px 20px 0 rgba(0, 0, 0, 0.16)',
      cursor     : 'pointer'
      // transform   : 'scale(1.1)'
    },
    borderColor : '#d5d5d5',
    borderRadius: 12,
    minWidth    : 275,
    padding     : 20
  },
  title: {
    color         : '#353535',
    fontSize      : '1.125rem',
    fontWeight    : 600,
    letterSpacing : 'normal',
    lineHeight    : 1.22,
    marginBottom  : 10,
    textAlign     : 'left',
    textDecoration: 'none'
  }
})

export default function CardService({ data }) {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <Link
        to={{
          pathname: `/service/${data.url}`,
          state   : { id: data._id }
        }}>
        <CardContent>
          <div className={classes.contentImage}>
            <img src={data.icon} />
          </div>
          <Typography className={classes.title} color='textSecondary' gutterBottom>
            {data.title}
          </Typography>
          <Typography className={classes.description} component='p' variant='body2'>
            {data.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <div className={classes.action}>
            <ArrowForwardIosIcon />
          </div>
        </CardActions>
      </Link>
    </Card>
  )
}
