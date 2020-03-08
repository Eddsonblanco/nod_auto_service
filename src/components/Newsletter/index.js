import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import {
  Typography,
  Container,
  InputAdornment,
  FormControl,
  Button,
  OutlinedInput,
  Grid
} from '@material-ui/core'

import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles(theme => ({
  actions: {
    '& > button:first-child': {
      marginBottom: 10
    },
    display                     : 'flex',
    flexDirection               : 'column',
    justifyContent              : 'center',
    marginTop                   : theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      '& > button:first-child': {
        marginBottom: 0,
        marginRight : theme.spacing(4)
      },
      flexDirection: 'row'
    }
  },
  container: {
    paddingBottom: '140px',
    paddingTop   : '140px'
  },
  form: {
    borderRadius: 12,
    marginTop   : theme.spacing(4),
    maxWidth    : 490,
    width       : '100%'
  },
  inputRoot: {
    borderRadius: 12
  },
  subtitle: {
    fontWeight: '300',
    textAlign : 'center'
  },
  title: {
    color       : '#353535',
    fontWeight  : '600',
    marginBottom: theme.spacing(2),
    textAlign   : 'center'
  }
  // root: {
  //   '& > *': {
  //     margin: theme.spacing(1)
  //   }
  // }
}))

const Newsletter = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} maxWidth='lg'>
      <Grid
        alignItems='center'
        container
        direction='column'
        justify='flex-start'>
        <Typography
          className={classes.title}
          variant='h5'>Subscribe to our newspaper</Typography>
        <Typography className={classes.subtitle} variant='subtitle2'>Our service team is available 7 days a week:</Typography>
        <Typography className={classes.subtitle} variant='subtitle1'>
            Monday - Friday 6 AM to 5 PM PSTSaturday - Sunday 7 AM - 4 PM PST
        </Typography>

        <FormControl className={classes.form} variant='outlined'>
          <OutlinedInput
            classes={
              { notchedOutline: classes.inputRoot }
            }
            endAdornment={
              <InputAdornment position='end'>
                <SendIcon />
              </InputAdornment>
            }
            id='outlined-adornment-password'
            labelWidth={0}
            placeholder='domain@domain.com'
            // onChange={handleChange('password')}
            value='' />
          <div className={classes.actions}>
            <Button color='secondary' variant='contained'>
                READ FAQ
            </Button>
            <Button variant='outlined'>
                GET An appoinment
            </Button>
          </div>
        </FormControl>

      </Grid>

    </Container>
  )
}

export default Newsletter
