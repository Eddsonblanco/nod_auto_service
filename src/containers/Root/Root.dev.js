import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'

import PropTypes from 'prop-types'

import DevTools from './DevTools'

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

export default class Root extends Component {
  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
          <DevTools />
        </ThemeProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
