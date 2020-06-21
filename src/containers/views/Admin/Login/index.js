import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
// import FormControlLabel from '@material-ui/core/FormControlLabel'
// import Checkbox from '@material-ui/core/Checkbox'
// import Link from '@material-ui/core/Link'
// import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import userDucks from 'reducers/users'

const {
  login

} = userDucks.creators

function Copyright() {
  return (
    <Typography align='center' color='textSecondary' variant='body2'>
      {'Copyright © '}
      {/* <Link color='inherit' href='https://material-ui.com/'>
  ...
      </Link>{' '} */}
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
    marginTop: theme.spacing(1),
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

export default function SignIn() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    status
  } = useSelector(state => state.users)

  const [ values, setValues ] = React.useState({
    password: '',
    username: ''
  })

  React.useEffect(() => {
    if(status === 'USER_LOGIN')
      if(typeof window !== 'undefined') window.location.href = '/admin'
  }, [ status ])

  const _handleChageForm = (ev) => {
    setValues({
      ...values,
      [ev.target.name]: ev.target.value
    })
  }

  const _handleClickLogin = () => {
    if(values.username.length > 3 && values.password.length > 4)
      dispatch(login(values))
  }

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
      Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            autoComplete='username' autoFocus fullWidth
            id='username' label='Username' margin='normal'
            name='username'
            onChange={_handleChageForm}
            required
            value={values.username} variant='outlined' />
          <TextField
            autoComplete='current-password' fullWidth id='password'
            label='Password' margin='normal' name='password'
            onChange={_handleChageForm}
            required
            type='password'
            value={values.password} variant='outlined' />
          {/* <FormControlLabel
            control={<Checkbox color='primary' value='remember' />}
            label='Remember me' /> */}
          <Button
            className={classes.submit}
            color='primary'
            fullWidth onClick={_handleClickLogin} variant='contained'>
        Sign In
          </Button>
          {/* <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
          Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  )
}
