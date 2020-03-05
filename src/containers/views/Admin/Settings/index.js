import React from 'react'

import { Grid, TextField, Button } from '@material-ui/core'

const Settings = (props) => {
  console.log('===> XAVI <===: Settings -> props', props)

  return (
    <Grid container>
      <Grid item>
        <TextField
          fullWidth
          helperText='Full width!'
          id='standard-full-width'
          InputLabelProps={{
            shrink: true
          }}
          label='Title'
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
          label='Direction'
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
          label='Phone'
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
          label='Phone Extra'
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
          label='Logo'
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
          label='copyright'
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
          label='Email contact'
          margin='normal'
          placeholder='Placeholder'
          style={{ margin: 8 }} />

        <Button color='primary' variant='contained'>Save</Button>
      </Grid>
    </Grid>
  )
}

export default Settings
