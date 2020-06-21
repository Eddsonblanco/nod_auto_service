import React from 'react'

import {
  Grid,
  TextField,
  Button
} from '@material-ui/core'

import ContainerAdmin from 'components/Admin/Common/ContainerAdmin'
import TabsAdmin from 'components/Admin/Common/TabsAdmin'

const Abouts = () => {
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

  const social = (<>
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

  const identity = (<>
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

  const seo = (<>
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

  const form = (<>
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
    <ContainerAdmin
      actionSave={
        <Button color='secondary' variant='contained'>Save</Button>
      }
      title='Settings'>
      <Grid container>
        <Grid item xs>
          <TabsAdmin
            tabContent={[
              info,
              social,
              identity,
              seo,
              form
            ]}
            tabHeader={[
              'Info',
              'Social',
              'Identity',
              'Seo',
              'Form'
            ]}
            tabName='settings' />
        </Grid>
      </Grid>
    </ContainerAdmin>

  )
}

export default Abouts
