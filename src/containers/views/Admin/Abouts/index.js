import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  TextField,
  Button,
  Typography
} from '@material-ui/core'

import InputImage from 'components/Admin/Common/InputImage'

import TabsAdmin from 'components/Admin/Common/TabsAdmin'

import aboutsDucks from 'reducers/abouts'

const {
  getAbouts,
  updateAbouts
} = aboutsDucks.creators

const Abouts = () => {
  const dispatch = useDispatch()

  const {
    status,
    ...others
  } = useSelector(state => state.abouts)

  const [ dataForm, setDataForm ] = useState(null)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getAbouts())
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
    dispatch(updateAbouts(dataForm))
  }

  const handleChangeImage = ev => {
    setDataForm({
      ...dataForm,
      image1: ev.file
    })
  }

  const handleChangeImage2 = ev => {
    setDataForm({
      ...dataForm,
      image2: ev.file
    })
  }

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
              placeholder='Title page'
              style={{ margin: 8 }}
              value={dataForm.title} />

            <Typography>Section top</Typography>

            <TextField
              fullWidth
              id='company-direction'
              InputLabelProps={{
                shrink: true
              }}
              label='Block 1'
              margin='normal'
              name='block1'
              onChange={_handleChangeForm}
              placeholder='Text block 1'
              style={{ margin: 8 }}
              value={dataForm.block1} />

            <Typography>Image Block 1</Typography>

            <InputImage
              data={dataForm.image1}
              error={false}
              key='company-img-1'
              maxWidth='450px'
              name='image1'
              onImage={handleChangeImage} />

            <TextField
              fullWidth
              id='company-block-2'
              InputLabelProps={{
                shrink: true
              }}
              label='Block 2'
              margin='normal'
              name='block2'
              onChange={_handleChangeForm}
              placeholder='text block 2'
              style={{ margin: 8 }}
              value={dataForm.block2} />

            <TextField
              fullWidth
              id='company-block3'
              InputLabelProps={{
                shrink: true
              }}
              label='Block 3'
              margin='normal'
              name='block3'
              onChange={_handleChangeForm}
              placeholder='Text block 3'
              style={{ margin: 8 }}
              value={dataForm.block3} />

            <Typography>Image Block 1</Typography>

            <InputImage
              data={dataForm.image2}
              error={false}
              key='company-img-2'
              maxWidth='450px'
              name='image2'
              onImage={handleChangeImage2} />

            <Typography>Section End</Typography>

            <TextField
              fullWidth
              id='company-copyright'
              InputLabelProps={{
                shrink: true
              }}
              label='Title'
              margin='normal'
              name='title_end'
              onChange={_handleChangeForm}
              placeholder='Title'
              style={{ margin: 8 }}
              value={dataForm.title_end} />

            <TextField
              fullWidth
              id='company-email'
              InputLabelProps={{
                shrink: true
              }}
              label='Subtitle'
              margin='normal'
              name='sub_title_end'
              onChange={_handleChangeForm}
              placeholder='Subtitle'
              style={{ margin: 8 }}
              value={dataForm.sub_title_end} />

            <TextField
              fullWidth
              id='company-email-paragraph'
              InputLabelProps={{
                shrink: true
              }}
              label='Block 1'
              margin='normal'
              name='paragraph_end'
              onChange={_handleChangeForm}
              placeholder='Text Block 1'
              style={{ margin: 8 }}
              value={dataForm.paragraph_end} />
          </>
        ]}
        tabHeader={[
          'Info'
        ]}
        tabName='Abouts' /> : null
  )
}

export default Abouts
