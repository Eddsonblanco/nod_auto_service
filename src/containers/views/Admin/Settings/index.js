import React from 'react'

import {
  Grid,
  TextField
} from '@material-ui/core'

import ContainerAdmin from 'components/Admin/Common/ContainerAdmin'
import TabsAdmin from 'components/Admin/Common/TabsAdmin'

const Settings = () => {
  const info = (<>
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
  </>)

  return (
    <ContainerAdmin title='Settings'>
      <Grid container>
        <Grid item xs>
          <TabsAdmin
            tabContent={[
              info
            ]}
            tabHeader={[
              'Info',
              'Social',
              'Identity',
              'Seo',
              'Form'
            ]}
            tabName='settings' />

          {/* <TextField
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

        <Button color='primary' variant='contained'>Save</Button> */}
        </Grid>
      </Grid>
    </ContainerAdmin>

  )
}

export default Settings
