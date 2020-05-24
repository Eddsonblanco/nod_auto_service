import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import {
  Typography,
  Container,
  InputAdornment,
  FormControl,
  Button,
  OutlinedInput,
  Grid,
  Dialog,
  DialogContent
  // Snackbar
} from '@material-ui/core'

import {
  Send as SendIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon
} from '@material-ui/icons'

// import MuiAlert from '@material-ui/lab/Alert'

import newsletterDucks from 'reducers/newsletters'

const {
  createNewsletter,
  closeConfirm
} = newsletterDucks.creators

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
  iconConfirm: {
    color       : '#48c9b0',
    fontSize    : '50px',
    marginBottom: '20px'
  },
  iconConfirmError: {
    color       : theme.palette.error.main,
    fontSize    : '50px',
    marginBottom: '20px'
  },
  inputRoot: {
    borderRadius: 12
  },
  modalConfirm: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    padding      : 14
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
  },
  titleConfirm: {
    color     : '#353535',
    fontSize  : 20,
    fontWeight: 600
  }
  // root: {
  //   '& > *': {
  //     margin: theme.spacing(1)
  //   }
  // }
}))

const Newsletter = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    status
  } = useSelector(state => state.newsletters)

  const [ email, setEmail ] = useState('')

  const _handleCreate = () => {
    dispatch(createNewsletter(email))
  }

  const _handleCloseDialogConfirm = () => {
    dispatch(closeConfirm())
  }

  useEffect(() => {
    if(status === 'SAVED')
      setEmail('')
  }, [ status ])

  return (
    <>

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
                <InputAdornment onClick={_handleCreate} position='end'>
                  <SendIcon />
                </InputAdornment>
              }
              id='outlined-adornment-password'
              labelWidth={0}
              onChange={ev => setEmail(ev.target.value)}
              placeholder='domain@domain.com'
              value={email} />
            <div className={classes.actions}>
              <Button
                color='secondary'
                variant='contained'>
                READ FAQ
              </Button>
              <Button variant='outlined'>
                GET An appoinment
              </Button>
            </div>
          </FormControl>

        </Grid>

      </Container>

      <Dialog
        aria-labelledby='responsive-dialog-response-title'
        onClose={_handleCloseDialogConfirm}
        open={status === 'SAVED' || status === 'ERROR'}>
        <DialogContent>
          <div className={classes.modalConfirm}>
            <div>
              {
                status === 'SAVED' &&
                  <CheckCircleIcon className={classes.iconConfirm} />
              }
              {
                status === 'ERROR' &&
                  <ErrorIcon className={classes.iconConfirmError} />
              }
            </div>
            {
              status === 'SAVED' &&
                <Typography className={classes.titleConfirm} style={{ marginBottom: 15 }}>
                Thank you we will keep you informed.</Typography>
            }

            {
              status === 'ERROR' &&
              <Typography className={classes.titleConfirm} style={{ marginBottom: 15 }}>
                Mail is already registered.</Typography>
            }

            {
              (status === 'ERROR' || status === 'SAVED') &&
            <Button
              color='primary'
              onClick={_handleCloseDialogConfirm}
              variant='contained'>back to home</Button>
            }

          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Newsletter
