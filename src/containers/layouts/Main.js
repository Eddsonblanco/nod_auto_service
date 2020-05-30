import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Helmet } from 'react-helmet-async'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'

import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Newsletter from 'components/Newsletter'

import settingsDucks from 'reducers/settings'

const { REACT_APP_SEO_TITLE, REACT_APP_SEO_DESCRIPTION } = process.env

const {
  getSettings
} = settingsDucks.creators

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        '&:hover': {
          boxShadow: '0 3px 20px 0 rgba(246, 78, 78, 0.6)'
        },
        color: '#fff'
      },
      outlined: {
        border     : 'solid 1.5px #d5d5d5',
        borderColor: '#d5d5d5',
        color      : '#353535',
        fontWeight : 600,
        padding    : '14px 40px'
      },
      root: {
        borderRadius: 30,
        fontSize    : '0.8125rem',
        fontWeight  : 600,
        padding     : '14px 40px'// '16px 40px'
      }
    }
  },
  palette: {
    primary: {
      main: '#f64e4e'
    }
    // secondary: {
    //   main: '#fff'
    // }
  },
  typography: {
    fontFamily: [
      'Poppins',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
})

const styles = makeStyles({
  body: {
    background: '#fff'
  }
})

export default (props) => {
  const {
    children,
    history: {
      location: {
        pathname
      }
    }
  } = props

  const dispatch = useDispatch()
  const classes = styles()
  const {
    _id,
    title,
    description,
    logo_footer
  } = useSelector(state => state.settings)

  const headDomainPage = 'https://nod.xaviergz.com/'

  useEffect(() => {
    if(!_id)
      dispatch(getSettings())
  }, [])

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta content={title ? title : REACT_APP_SEO_TITLE} property='og:title' />
        <meta content={description ? description : REACT_APP_SEO_DESCRIPTION} name='description' />
        <meta content={description ? description : REACT_APP_SEO_DESCRIPTION} name='og:description' />
        <meta content={logo_footer} property='og:image' />
        <meta content={`${headDomainPage}${pathname}`} property='og:url' />

      </Helmet>
      <ThemeProvider theme={theme}>
        <div className={classes.body}>
          <Header />

          {children}
          <Newsletter />
          <Footer />

        </div>
      </ThemeProvider>
    </>
  )
}
