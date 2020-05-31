import React, { useState, useEffect } from 'react'
import { Post } from 'lib/Request'

import { useHistory } from 'react-router-dom'

import { useDispatch, useSelector } from 'react-redux'
// The editor core
import Editor from '@react-page/editor'
import '@react-page/core/lib/index.css' // we also want to load the stylesheets
// Require editor ui stylesheet
import '@react-page/ui/lib/index.css'

// Load some exemplary plugins:
import slate from '@react-page/plugins-slate' // The rich text area plugin
import '@react-page/plugins-slate/lib/index.css' // Stylesheets for the rich text area plugin
import background from '@react-page/plugins-background' // A plugin for background images
import '@react-page/plugins-background/lib/index.css' // Stylesheets for  background layout plugin
import { imagePlugin } from '@react-page/plugins-image'
import spacer from '@react-page/plugins-spacer'

import InputImage from 'components/Admin/Common/InputImage'

import  {
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import serviceDucks from 'reducers/services'

const {
  createService,
  getService,
  updateService,
  resetService
} = serviceDucks.creators

const style = makeStyles(() => ({
  containerTitle: {
    '& > h4': {
      marginRight: 20
    },
    display: 'flex'
  },
  rootNew: {
    background: '#fff',
    height    : '100%',
    overflow  : 'auto',
    padding   : '20px',
    position  : 'relative'
  },
  rootPage: {
    '& img': {
      width: '100%'
    },
    '&:first-child': {
      position: 'initial'
    },
    height  : '100%',
    // maxWidth  : '960px',
    overflow: 'auto',
    padding : '40px 80px',
    width   : '100%'
  }
}))

const fakeImageUploadService = () => (file) => {
  var formData = new FormData()

  formData.append('image', file)

  return Post('/galleries', formData, {
    'content-type': 'multipart/form-data'
  })
    .then(response => ({ url: response.data.image }))
    .catch(error => console.error('Error:', error))
}

// Define which plugins we want to use. We only have slate and background available, so load those.
const plugins = {
  content: [
    slate(),
    spacer,
    imagePlugin({ /* Controls: ImagePageUploader, */imageUpload: fakeImageUploadService('/images/react.png') })
  ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [
    background({ defaultPlugin: slate() })
  ] // Define plugins for layout cells
}

const New = () => {
  const dispatch = useDispatch()
  const classes = style()
  const history = useHistory()

  const {
    status,
    serviceDetail
  } = useSelector(state => state.services)

  const {
    location: {
      state
    }
  } = useSelector(state => state.router)

  const [ editorValue, setEditorValue ] = useState()
  const [ dataForm, setDataForm ] = useState(null)

  useEffect(() => {
    if(status === 'SERVICE_CREATED' || status === 'SAVED')
      history.push('/admin/services')
  }, [ status ])

  useEffect(() => {
    if(state && state.id)
      dispatch(getService(state.id))
  }, [])

  useEffect(() => {
    if(status === 'READY' && !dataForm && serviceDetail)
      setDataForm(() => {
        setEditorValue(JSON.parse(serviceDetail.content))

        return serviceDetail
      })
  }, [ status ])

  useEffect(() => {
    return () => {
      dispatch(resetService())
    }
  }, [])

  const _handleChangeForm = (ev) => {
    if(ev.target.name === 'show_home')
      setDataForm({
        ...dataForm,
        [ev.target.name]: ev.target.checked
      })
    else
      setDataForm({
        ...dataForm,
        [ev.target.name]: ev.target.value
      })
  }

  const handleChangeImage = ev => {
    setDataForm({
      ...dataForm,
      icon: ev.file
    })
  }

  // save the state somewhere
  const saveToDatabase = () => {
    dispatch(createService({
      ...dataForm,
      content: editorValue
    }))
  }

  const uppdateToDatabase = () => {
    dispatch(updateService({
      ...dataForm,
      content: editorValue,
      id     : state.id
    }))
  }

  return (
    dataForm ?
      <div className={classes.rootNew}>
        <div className={classes.containerTitle}>
          <Typography variant='h4'>New Services</Typography>
          {
            (state && state.hasOwnProperty('id')) ?
              <Button color='primary' onClick={uppdateToDatabase} variant='contained'>
          update
              </Button> :
              <Button color='primary' onClick={saveToDatabase} variant='contained'>
              save
              </Button>
          }
        </div>

        <div>
          <TextField
            fullWidth
            id='service-name'
            InputLabelProps={{
              shrink: true
            }}
            label='Name'
            margin='normal'
            name='title'
            onChange={_handleChangeForm}
            placeholder='Service name'
            style={{ margin: 8 }}
            value={dataForm.title} />

          <TextField
            fullWidth
            id='desc-name'
            InputLabelProps={{
              shrink: true
            }}
            inputProps={{
              maxlength: 150
            }}
            label='Description'
            margin='normal'
            name='desc'
            onChange={_handleChangeForm}
            placeholder='Description'
            style={{ margin: 8 }}
            value={dataForm.desc} />

          <InputImage
            data={dataForm.icon}
            error={false}
            key='servce-img'
            maxWidth='450px'
            name='icon'
            onImage={handleChangeImage} />

          <div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={dataForm.show_home}
                  color='primary'
                  name='show_home'
                  onChange={_handleChangeForm} />
              }
              label='Show at home' />
          </div>
        </div>

        <div className={classes.rootPage}>
          <Editor onChange={setEditorValue} plugins={plugins} value={editorValue} />
        </div>
      </div> : null
  )
}

export default New
