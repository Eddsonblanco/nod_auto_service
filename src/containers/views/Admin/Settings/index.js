import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  TextField,
  Button,
  Typography
} from '@material-ui/core'

import InputImage from 'components/Admin/Common/InputImage'

import TabsAdmin from 'components/Admin/Common/TabsAdmin'

import settingsDucks from 'reducers/settings'

const {
  getSettings,
  updateSettings
} = settingsDucks.creators

const Settings = () => {
  const dispatch = useDispatch()

  const {
    status,
    ...others
  } = useSelector(state => state.settings)

  const [ dataForm, setDataForm ] = useState(null)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getSettings())
  }, [])

  useEffect(() => {
    if(status === 'READY' && !dataForm)
      setDataForm(others)
  }, [ status ])

  const _handleChangeForm = (ev) => {
    setDataForm({
      ...dataForm,
      [ev.target.name]: ev.target.value
    })
  }

  const _handleClickSave = () => {
    dispatch(updateSettings(dataForm))
  }

  const handleChangeImage = ev => {
    setDataForm({
      ...dataForm,
      logo: ev.file
    })
  }

  const handleChangeImage2 = ev => {
    setDataForm({
      ...dataForm,
      logo_footer: ev.file
    })
  }

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

  const actions = (<div>
    <Button
      color='primary'
      onClick={_handleClickSave}
      variant='contained'>Save</Button>
  </div>)

  return (
    dataForm ?
      <TabsAdmin
        tabActions={actions}
        tabContent={[
          <>
            <TextField
              fullWidth
              id='company-name'
              InputLabelProps={{
                shrink: true
              }}
              label='Title'
              margin='normal'
              name='title'
              onChange={_handleChangeForm}
              placeholder='company name'
              style={{ margin: 8 }}
              value={dataForm.title} />

            <TextField
              fullWidth
              id='company-direction'
              InputLabelProps={{
                shrink: true
              }}
              label='Direction'
              margin='normal'
              name='direction'
              onChange={_handleChangeForm}
              placeholder='company direction'
              style={{ margin: 8 }}
              value={dataForm.direction} />

            <TextField
              fullWidth
              id='company-phone'
              InputLabelProps={{
                shrink: true
              }}
              label='Phone'
              margin='normal'
              name='phone'
              onChange={_handleChangeForm}
              placeholder='phone'
              style={{ margin: 8 }}
              value={dataForm.phone} />

            <TextField
              fullWidth
              id='company-phone'
              InputLabelProps={{
                shrink: true
              }}
              label='Phone extra'
              margin='normal'
              name='phone_extra'
              onChange={_handleChangeForm}
              placeholder='phone extra'
              style={{ margin: 8 }}
              value={dataForm.phone_extra} />

            <Typography>Logo Header</Typography>

            <InputImage
              data={dataForm.logo}
              error={false}
              key='company-img'
              maxWidth='450px'
              name='image'
              onImage={handleChangeImage} />

            <Typography>Logo Footer</Typography>

            <InputImage
              data={dataForm.logo_footer}
              error={false}
              key='company-img-2'
              maxWidth='450px'
              name='image-footer'
              onImage={handleChangeImage2} />

            <TextField
              fullWidth
              id='company-copyright'
              InputLabelProps={{
                shrink: true
              }}
              label='copyright'
              margin='normal'
              name='copyright'
              onChange={_handleChangeForm}
              placeholder='copyright'
              style={{ margin: 8 }}
              value={dataForm.copyright} />

            <TextField
              fullWidth
              id='company-email'
              InputLabelProps={{
                shrink: true
              }}
              label='email '
              margin='normal'
              name='email'
              onChange={_handleChangeForm}
              placeholder='email'
              style={{ margin: 8 }}
              value={dataForm.email} />
          </>,
          <>
            <TextField
              fullWidth
              id='facebook'
              InputLabelProps={{
                shrink: true
              }}
              label='Facebook'
              margin='normal'
              name='facebook'
              onChange={_handleChangeForm}
              placeholder='Facebook url'
              style={{ margin: 8 }}
              value={dataForm.facebook} />

            <TextField
              fullWidth
              id='twitter'
              InputLabelProps={{
                shrink: true
              }}
              label='Twitter'
              margin='normal'
              name='twitter'
              onChange={_handleChangeForm}
              placeholder='Twitter url'
              style={{ margin: 8 }}
              value={dataForm.twiiter} />

            <TextField
              fullWidth
              id='instagram'
              InputLabelProps={{
                shrink: true
              }}
              label='Instagram'
              margin='normal'
              name='instagram'
              onChange={_handleChangeForm}
              placeholder='Instagram url'
              style={{ margin: 8 }}
              value={dataForm.instagram} />
          </>,
          identity,
          seo
        ]}
        tabHeader={[
          'Info',
          'Social',
          'Identity',
          'Seo'
        ]}
        tabName='Setttings' /> : null
  )
}

export default Settings
