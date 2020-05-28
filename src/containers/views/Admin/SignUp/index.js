
import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

function Copyright() {
  return (
    <Typography align='center' color='textSecondary' variant='body2'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles((theme) => ({
  avatar: {
    backgroundColor: theme.palette.secondary.main,
    margin         : theme.spacing(1)
  },
  form: {
    // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    width    : '100%'
  },
  paper: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    marginTop    : theme.spacing(8)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}))

export default function SignUp() {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item sm={6} xs={12}>
              <TextField
                autoComplete='fname'
                autoFocus
                fullWidth
                id='firstName'
                label='First Name'
                name='firstName'
                required
                variant='outlined' />
            </Grid>
            <Grid item sm={6} xs={12}>
              <TextField
                autoComplete='lname'
                fullWidth
                id='lastName'
                label='Last Name'
                name='lastName'
                required
                variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='email'
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                required
                variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete='current-password'
                fullWidth
                id='password'
                label='Password'
                name='password'
                required
                type='password'
                variant='outlined' />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox color='primary' value='allowExtraEmails' />}
                label='I want to receive inspiration, marketing promotions and updates via email.' />
            </Grid>
          </Grid>
          <Button
            className={classes.submit}
            color='primary'
            fullWidth
            type='submit'
            variant='contained'>
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              <Link href='#' variant='body2'>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  )
}
