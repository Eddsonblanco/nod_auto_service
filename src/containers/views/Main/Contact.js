import React, { useState } from 'react'

import {
  Grid,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  carContainer: {
    display: 'flex'
  },
  carContainerText: {
    marginLeft: 14
  },
  mapContainer: {
    height  : '100%',
    position: 'relative',
    width   : '100%'
  },
  wrapper: {
    marginTop: 70
  }
})

const Contact = (props) => {
  const classes = useStyles()

  const [ activeMarker, setActiveMarker ] = useState({})
  // eslint-disable-next-line no-unused-vars
  const [ selectedPlace, setSelectedPlace ] = useState({})
  const [ showingInfoWindow, setShowingInfoWindow ] = useState(false)

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
    <Container maxWidth='lg'>
      <Grid className={classes.wrapper} container spacing={3}>
        <Grid item xs={5}>
          <div>
            <Typography variant='h4'>Contact.</Typography>
            <Typography variant='body1'>Leave us a message</Typography>

            <Grid container spacing={4}>
              <Grid item xs={6}>
                <TextField
                  helperText='Full width!'
                  InputLabelProps={{
                    shrink: true
                  }}
                  label='Label'
                  margin='normal'
                  placeholder='Placeholder'
                  style={{ margin: 8 }} />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  helperText='Full width!'
                  InputLabelProps={{
                    shrink: true
                  }}
                  label='Label'
                  margin='normal'
                  placeholder='Placeholder'
                  style={{ margin: 8 }} />
              </Grid>
            </Grid>

            <TextField
              fullWidth
              helperText='Full width!'
              InputLabelProps={{
                shrink: true
              }}
              label='Label'
              margin='normal'
              placeholder='Placeholder'
              style={{ margin: 8 }} />

            <TextField
              fullWidth
              helperText='Full width!'
              InputLabelProps={{
                shrink: true
              }}
              label='Label'
              margin='normal'
              placeholder='Placeholder'
              style={{ margin: 8 }} />

            <Button color='primary' variant='contained'>I want you to contact me</Button>
          </div>
        </Grid>
        <Grid item xs={7}>
          <div className={classes.mapContainer}>
            <Map
              google={props.google}
              initialCenter={{ lat: 47.444, lng: -122.176 }}
              // style={mapStyles}
              zoom={8} >
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

      <Grid container spacing={5}>
        <Grid item xs={4}>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs={4}>
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
