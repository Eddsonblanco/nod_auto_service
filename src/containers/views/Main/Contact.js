import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Grid,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import { makeStyles } from '@material-ui/styles'

import contactDucks from 'reducers/contacts'

const {
  createContact
} = contactDucks.creators

const useStyles = makeStyles(theme => ({
  btnAction: {
    marginTop: 40
  },
  carContainer: {
    display: 'flex'
  },
  carContainerText: {
    marginLeft: 14
  },
  mapContainer: {
    height  : '560px',
    position: 'relative',
    width   : '100%'
  },
  messageContainer: {
    marginBottom: 70
  },
  parent: {
    overflow: 'hidden'
  },
  subtitle: {
    marginBottom: 40
  },
  title: {
    fontWeight: 600
  },
  twoInput: {
    [theme.breakpoints.up('md')]: {
      gridGap            : 30,
      gridTemplateColumns: '1fr 1fr'
    },
    display: 'grid'
  },
  wrapper: {
    marginBottom: 100,
    marginTop   : 70
  }
}))

const Contact = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const {
    messageSend
  } = useSelector(store => store.contacts)

  const { handleSubmit, control, errors } = useForm()
  const onSubmit = data => dispatch(createContact(data))

  const [ activeMarker, setActiveMarker ] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [ selectedPlace, setSelectedPlace ] = useState({})
  const [ showingInfoWindow, setShowingInfoWindow ] = useState(false)

  const validFormMessage = (errors, data) => {
    const {
      name = '',
      message = {
        pattern : '',
        required: 'Your input is required'
      }
    } = data

    if(errors && errors[name]) {
      const {
        type = ''
      } = errors[name]
      switch (type) {
        case 'required':

          return message.required

        case 'pattern':

          return message.pattern

        default:
          return ''
      }
    }
  }

  const _handleClickMarker = (props, marker) => {
    setActiveMarker(marker)
    setSelectedPlace(props)
    setShowingInfoWindow(true)
  }

  const _handleClickClose = (props, marker) => {
    setActiveMarker(marker)
    setSelectedPlace(props)
    setShowingInfoWindow(false)
  }

  return (
    <Container className={classes.parent} maxWidth='lg'>
      <Grid className={classes.wrapper} container spacing={10}>
        <Grid item md={5} xs={12}>
          {
            !messageSend ?
              <div>
                <Typography className={classes.title} variant='h4'>Contact.</Typography>
                <Typography className={classes.subtitle} variant='body1'>Leave us a message</Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className={classes.twoInput}>
                    <Controller
                      as={
                        <TextField
                          error={Boolean(errors['name'])}
                          fullWidth
                          helperText={validFormMessage(errors, {
                            name: 'name'
                          })}
                          label='Full Name'
                          style={{ marginTop: 20 }}
                          variant='outlined' />
                      }
                      control={control}
                      defaultValue=''
                      name='name'
                      rules={{ required: true }} />

                    <Controller
                      as={
                        <TextField
                          error={Boolean(errors['phone'])}
                          fullWidth
                          helperText={validFormMessage(errors, {
                            message: {
                              pattern : 'it must be a number',
                              required: 'Your input is required'
                            },
                            name: 'phone'
                          })
                          }
                          label='Phone'
                          style={{ marginTop: 20 }}
                          variant='outlined' />
                      }
                      control={control}
                      defaultValue=''
                      name='phone'
                      rules={{ maxLength: 10, pattern: /^\d+$/, required: true }} />

                  </div>

                  <Controller
                    as={
                      <TextField
                        error={Boolean(errors['email'])}
                        fullWidth
                        helperText={validFormMessage(errors, {
                          name: 'email'
                        })}
                        label='Email'
                        style={{ marginTop: 20 }}
                        variant='outlined' />

                    }
                    control={control}
                    defaultValue=''
                    name='email'
                    rules={{ required: true }} />

                  <Controller
                    as={
                      <TextField
                        error={Boolean(errors['message'])}
                        fullWidth
                        helperText={(errors['message'] && errors['message'].type === 'required') ? 'Your input is required' : ''}
                        label='Message'
                        multiline
                        rows='8'
                        style={{ marginTop: 20 }}
                        variant='outlined' />

                    }
                    control={control}
                    defaultValue=''
                    name='message'
                    rules={{ required: true }} />

                  <Button
                    className={classes.btnAction}
                    color='primary'
                    type='submit'
                    variant='contained'>I want you to contact me</Button>

                </form>

              </div> :
              <div>
                <Typography className={classes.title} variant='h4'>Thanks.</Typography>
              </div>
          }
        </Grid>
        <Grid item md={7} xs={12}>
          <div className={classes.mapContainer}>
            <Map
              google={props.google}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
              // style={mapStyles}
              zoom={8}>
              <Marker
                name={'Current location'}
                onClick={_handleClickMarker} />

              <InfoWindow
                marker={activeMarker}
                onClose={_handleClickClose}
                visible={showingInfoWindow}>
                <div>
                  <h1>{'this.state.selectedPlace.name'}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </Grid>
      </Grid>

      <div className={classes.messageContainer}>
        <Typography variant='h6'>Quick,</Typography>
        <Typography gutterBottom variant='h6'>Support<span>:</span></Typography>
        <Typography variant='body1'>You can get all the contact information</Typography>
      </div>

      <Grid container spacing={5}>
        <Grid
          item md={4} sm={6}
          xs={12}>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item md={4} sm={6}
          xs={12}>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid
          item md={4} sm={6}
          xs={12}>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default GoogleApiWrapper({
  apiKey: 'API-KEY'
})(Contact)
