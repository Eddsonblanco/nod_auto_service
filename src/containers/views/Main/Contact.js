import React from 'react'

import {
  Grid,
  Container,
  Typography,
  TextField,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  carContainer: {
    display: 'flex'
  },
  carContainerText: {
    marginLeft: 14
  }
})

export default function Contact() {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Grid container>
        <Grid item xs='5'>
          <div>
            <Typography variant='h4'>Contact.</Typography>
            <Typography variant='body1'>Leave us a message</Typography>

            <Grid container spacing={4}>
              <Grid item xs='6'>
                <TextField
                  helperText='Full width!'
                  id='standard-full-width'
                  InputLabelProps={{
                    shrink: true
                  }}
                  label='Label'
                  margin='normal'
                  placeholder='Placeholder'
                  style={{ margin: 8 }} />
              </Grid>
              <Grid item xs='6'>
                <TextField
                  helperText='Full width!'
                  id='standard-full-width'
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
              id='standard-full-width'
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
              id='standard-full-width'
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
        <Grid item xs='7'>
          <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/8d889a0c-1412-48e8-a566-cc3a2c71d8b5.png' />
        </Grid>
      </Grid>

      <Grid container spacing={5}>
        <Grid item xs='4'>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs='4'>
          <div className={classes.carContainer}>
            <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/7e63f71f-4359-4307-b9c6-b0bc6286b576.svg' />
            <div className={classes.carContainerText}>
              <Typography>Location</Typography>
              <Typography>130 Industrial Way, Brisbane, CA 94005</Typography>
            </div>
          </div>
        </Grid>
        <Grid item xs='4'>
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
