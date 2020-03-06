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
  root: {
    '& > *': {
      margin: theme.spacing(1)
    }
  }
}))

const Newsletter = () => {
  const classes = useStyles()

  return (
    <Container maxWidth='lg'>
      <Grid
        alignItems='center'
        container
        direction='column'
        justify='flex-start'
        spacing={3}>
        <Typography variant='h5'>Subscribe to our newspaper</Typography>
        <Typography variant='subtitle1'>Our service team is available 7 days a week:</Typography>
        <Typography variant='subtitle1'>
            Monday - Friday 6 AM to 5 PM PSTSaturday - Sunday 7 AM - 4 PM PST
        </Typography>

        <FormControl /* className={clsx(classes.margin, classes.textField)} */ variant='outlined'>
          <OutlinedInput
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
        </FormControl>

        <div className={classes.actions}>
          <Button color='primary' variant='contained'>
              Primary
          </Button>
          <Button color='secondary' variant='contained'>
              Secondary
          </Button>
        </div>
      </Grid>

    </Container>
  )
}

export default Newsletter
