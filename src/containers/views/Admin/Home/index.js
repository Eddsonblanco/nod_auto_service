import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  FormControlLabel,
  Checkbox,
  Button,
  TextField,
  Typography
} from '@material-ui/core'
import InputImage from 'components/Admin/Common/InputImage'

import TabsAdmin from 'components/Admin/Common/TabsAdmin'

import pageHomeDucks from 'reducers/pagehome'

const {
  getPageConfig,
  updateCheckbox,
  updatePageConfig
} = pageHomeDucks.creators

const PageHome = () => {
  const dispatch = useDispatch()

  const {
    status,
    show_banner,
    show_brands,
    show_newsletter,
    show_services,
    show_testimonials,
    // banners,
    ...others
  } = useSelector(state => state.page_home)

  // const [ stateBanner ] = useState(banners)
  const [ dataForm, setDataForm ] = useState(null)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getPageConfig())
  }, [])

  useEffect(() => {
    if(status === 'READY' && !dataForm)
      setDataForm(others)
  }, [ status ])

  // actions
  const _handleChangeCheckbox = ev => {
    dispatch(updateCheckbox(ev.target.name, ev.target.checked))
  }

  const _handleChangeForm = (ev) => {
    setDataForm({
      ...dataForm,
      [ev.target.name]: ev.target.value
    })
  }

  const handleChangeImage = ev => {
    setDataForm({
      ...dataForm,
      message_icon: ev.file
    })
  }

  const handleChangeImage2 = ev => {
    setDataForm({
      ...dataForm,
      message_image: ev.file
    })
  }

  const _handleClickSave = () => {
    dispatch(updatePageConfig(dataForm))
  }

  const actions = (<div>
    <Button
      color='primary'
      onClick={_handleClickSave}
      variant='contained'>Save</Button>
  </div>)

  return (
    <TabsAdmin
      tabActions={actions}
      tabContent={[
        dataForm ?
          <>
            <TextField
              fullWidth
              id='message-name'
              InputLabelProps={{
                shrink: true
              }}
              label='Message left'
              margin='normal'
              name='message_left'
              onChange={_handleChangeForm}
              placeholder=''
              style={{ margin: 8 }}
              value={dataForm.message_left} />

            <TextField
              fullWidth
              id='message-desc'
              InputLabelProps={{
                shrink: true
              }}
              label='Title service'
              margin='normal'
              name='message_title'
              onChange={_handleChangeForm}
              placeholder='Title service'
              style={{ margin: 8 }}
              value={dataForm.message_title} />

            <TextField
              fullWidth
              id='company-desc'
              InputLabelProps={{
                shrink: true
              }}
              label='Description service'
              margin='normal'
              name='message_desc'
              onChange={_handleChangeForm}
              placeholder='Description service'
              style={{ margin: 8 }}
              value={dataForm.message_desc} />

            <TextField
              fullWidth
              id='link-phone'
              InputLabelProps={{
                shrink: true
              }}
              label='Link service'
              margin='normal'
              name='message_link'
              onChange={_handleChangeForm}
              placeholder='Link service'
              style={{ margin: 8 }}
              value={dataForm.message_link} />

            <Typography>Icon service</Typography>

            <InputImage
              data={dataForm.message_icon}
              error={false}
              key='company-img'
              maxWidth='450px'
              name='message_icon'
              onImage={handleChangeImage} />

            <Typography>Image Center</Typography>

            <InputImage
              data={dataForm.message_image}
              error={false}
              key='company-img2'
              maxWidth='450px'
              name='message_image'
              onImage={handleChangeImage2} />
          </> : null,
        <>
          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={show_banner}
                  color='primary'
                  name='show_banner'
                  onChange={_handleChangeCheckbox} />
              }
              label='Show Banner' />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={show_brands}
                  color='primary'
                  name='show_brands'
                  onChange={_handleChangeCheckbox} />
              }
              label='Show Brands' />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={show_newsletter}
                  color='primary'
                  name='show_newsletter'
                  onChange={_handleChangeCheckbox} />
              }
              label='Show Newsletter' />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={show_services}
                  color='primary'
                  name='show_services'
                  onChange={_handleChangeCheckbox} />
              }
              label='Show Services' />
          </div>

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={show_testimonials}
                  color='primary'
                  name='show_testimonials'
                  onChange={_handleChangeCheckbox} />
              }
              label='Show Testimonials' />
          </div>

        </>

      ]}
      tabHeader={[
        'Outstanding service',
        'config'
      ]}
      tabName='Page Home' />
  )
}

export default PageHome
