import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Card,
  CardContent,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  CardContent: {
    display : 'flex',
    flexFlow: 'Column'
  },
  date: {
    fontWeight: 400,
    marginTop : 30

  },
  description: {
    color                         : '#353535',
    fontSize                      : '1.125rem',
    fontWeight                    : 400,
    opacity                       : 0.89,
    paddingLeft                   : 20,
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.9rem',
      padding : 1
    }
  },
  imageContent: {
    '& > img': {
      width                         : '100%',
      [theme.breakpoints.down('sm')]: {
        width: '60%'
      }
    },
    marginBottom: 15,
    maxWidth    : 50,
    width       : '100%'

  },
  root: {
    borderColor                   : '#d5d5d5',
    borderRadius                  : 12,
    display                       : 'flex',
    flexDirection                 : 'column',
    height                        : 600,
    justifyContent                : 'space-between',
    maxWidth                      : 750,
    minWidth                      : 275,
    padding                       : 30,
    [theme.breakpoints.down('sm')]: {
      height   : '100%',
      minHeight: 500
    }
  }
}))

const Testimony = ({ data }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <div className={classes.imageContent}>
          <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/1c59260a-6a72-4440-a068-5ebd53c24570.svg' />
        </div>
        <Typography className={classes.description} component='p'>
          {data.desc}
        </Typography>
      </CardContent>
      <Typography
        align='right'
        className={classes.date}
        color='primary'
        component='p'>
        {data.author}, {data.date}
      </Typography>
    </Card>
  )
}

export default Testimony
