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

  const [ editorValue, setEditorValue ] = useState(
    {
      cells: [
        {
          id    : 'e73d3722-2f33-49f2-b9ad-a4c9a64560fd',
          inline: null,
          rows  : [
            {
              cells: [
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/image',
                      version: '0.0.1'
                    },
                    state: {
                      src: ''
                    }
                  },
                  id    : '84fbde3b-738c-4fa1-a845-af38335fbe53',
                  inline: null,
                  size  : 4
                },
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/spacer',
                      version: '0.0.1'
                    },
                    state: {
                      height: 24
                    }
                  },
                  id    : 'c66b6350-ac14-4f64-bfb7-45b7858e023e',
                  inline: null,
                  size  : 1
                },
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/slate',
                      version: '0.0.4'
                    },
                    state: {
                      slate: [
                        {
                          children: [
                            {
                              text: 'Efficiently provide access to one-to-one "outside the box" thinking after corporate e-business. Globally maintain world-class alignments via client-centered action items. Synergistically engineer proactive technology and ethical niches. Enthusiastically evolve.'
                            }
                          ],
                          type: 'PARAGRAPH/PARAGRAPH'
                        },
                        {
                          children: [
                            {
                              text: ''
                            }
                          ],
                          type: 'PARAGRAPH/PARAGRAPH'
                        },
                        {
                          children: [
                            {
                              text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.'
                            }
                          ],
                          type: 'PARAGRAPH/PARAGRAPH'
                        }
                      ]
                    }
                  },
                  id    : '57aaa9cf-3098-499d-a079-46d4f694f9a4',
                  inline: null,
                  size  : 7
                }
              ],
              id: 'c58746c1-56b0-4fb4-bfd2-0135b2716947'
            },
            {
              cells: [
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/spacer',
                      version: '0.0.1'
                    },
                    state: {
                      height: 100
                    }
                  },
                  id    : '6e240491-ad0e-4bc9-b9cf-201a9f2cc5a9',
                  inline: null,
                  size  : 12
                }
              ],
              id: '67319e24-caf3-4595-b467-13f1ddd16890'
            },
            {
              cells: [
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/slate',
                      version: '0.0.4'
                    },
                    state: {
                      slate: [
                        {
                          children: [
                            {
                              text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.\nLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing.'
                            }
                          ],
                          type: 'PARAGRAPH/PARAGRAPH'
                        }
                      ]
                    }
                  },
                  id    : 'ed9d2e91-2434-45e7-a088-c8b2f154045b',
                  inline: null,
                  size  : 7
                },
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/spacer',
                      version: '0.0.1'
                    },
                    state: {
                      height: 24
                    }
                  },
                  id    : '904ebfac-decd-4865-8913-62f6314e73cd',
                  inline: null,
                  size  : 1
                },
                {
                  content: {
                    plugin: {
                      name   : 'ory/editor/core/content/image',
                      version: '0.0.1'
                    },
                    state: {
                      src: ''
                    }
                  },
                  id    : '9fd28c51-df1e-49af-a022-9f5259a6cda0',
                  inline: null,
                  size  : 4
                }
              ],
              id: '9c70684f-c2bd-44b3-89a7-a8b50ce3eb2e'
            }
          ],
          size: 12
        }
      ],
      id: 'd7bb57b1-8e73-4008-9891-46b7aa16e912'
    }
  )
  const [ dataForm, setDataForm ] = useState({
    content  : {},
    desc     : '',
    icon     : '',
    show_home: false,
    title    : ''
  })

  useEffect(() => {
    if(status === 'SERVICE_CREATED' || status === 'SAVED')
      history.push('/admin/services')
  }, [ status ])

  useEffect(() => {
    if(state && state.id)
      dispatch(getService(state.id))
    else
      setDataForm({
        content  : {},
        desc     : '',
        icon     : '',
        show_home: false,
        title    : ''
      })
  }, [])

  useEffect(() => {
    return () => {
      dispatch(resetService())
    }
  }, [])

  useEffect(() => {
    if(status === 'READY' && serviceDetail)
      setDataForm(prevState => {
        setEditorValue(JSON.parse(serviceDetail.content))

        return serviceDetail
      })

    // if(status === 'NEW')
    //   setDataForm(prevState => {
    //     setEditorValue(JSON.parse(serviceDetail.content))

    //     return (
    //       {
    //         content  : {},
    //         desc     : '',
    //         icon     : '',
    //         show_home: false,
    //         title    : ''
    //       }
    //     )
    //   })
  }, [ status, serviceDetail ])

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

          {
            dataForm.icon ?
              <InputImage
                data={dataForm.icon}
                error={false}
                key='servce-img'
                maxWidth='450px'
                name='icon'
                onImage={handleChangeImage} /> :
              <InputImage
                error={false}
                key='servce-img'
                maxWidth='450px'
                name='icon'
                onImage={handleChangeImage} />
          }

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
