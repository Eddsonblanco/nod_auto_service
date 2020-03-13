import React from 'react'

import { createMuiTheme } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/styles'
import { makeStyles } from '@material-ui/core/styles'

import Footer from 'components/Common/Footer'
import Header from 'components/Common/Header'
import Newsletter from 'components/Newsletter'

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

export default ({ children }) => {
  const classes = styles()

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.body}>
        <Header />

        {children}
        <Newsletter />
        <Footer />

      </div>
    </ThemeProvider>
  )
}
