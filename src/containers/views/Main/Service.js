import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
// import clsx from 'clsx'

import { HTMLRenderer } from '@react-page/renderer'
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

import {
  Container,
  Breadcrumbs,
  Link,
  Typography
} from '@material-ui/core'

import servicesDucks from 'reducers/services'

const plugins = {
  content: [
    slate(),
    spacer,
    imagePlugin({  })
  ], // Define plugins for content cells. To import multiple plugins, use [slate(), image, spacer, divider]
  layout: [
    background({ defaultPlugin: slate() })
  ] // Define plugins for layout cells
}

const {
  getService
} = servicesDucks.creators

const useStyles = makeStyles(() => ({
  rootHtmlRender: {
    '& img': {
      width: '100%'
    },
    backgroundColor: '#f6f6f6',
    padding        : '40px 80px'
  },
  titleService: {
    color     : '#353535',
    fontFamily: 'Poppins',
    fontSize  : '0.75rem',
    fontWeight: '600',
    padding   : '14px 0 12px 0'
  }
}))

export default function Services() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    location: {
      state
    }
  } = useSelector(state => state.router)

  const {
    serviceDetail = {}
  } = useSelector(state => state.services)

  useEffect(() => {
    dispatch(getService(state.id))
  }, [])

  return (
    <Container>
      <Breadcrumbs
        aria-label='breadcrumb' className={classes.breadcrumbs}
        separator={<span className={classes.separator} />}>
        <Link color='inherit' href='/'>
          Home
        </Link>
        <Typography color='textPrimary'>{serviceDetail.title}</Typography>
      </Breadcrumbs>

      <Typography className={classes.titleService} variant='h4'>{serviceDetail.title}</Typography>
      {
        serviceDetail.content ?
          <div className={classes.rootHtmlRender}>
            <HTMLRenderer
              plugins={plugins} state={JSON.parse(serviceDetail.content)} />
          </div> : null

      }
    </Container>
  )
}
