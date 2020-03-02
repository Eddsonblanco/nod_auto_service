import React from 'react'
import { useSelector } from 'react-redux'

import { Typography, AppBar, Toolbar, IconButton, createMuiTheme, CssBaseline } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { ThemeProvider } from '@material-ui/styles'

import MaterialTheme from 'utils/MaterialTheme'

export default function Dashboard({ children }) {
  const style = useSelector(({ theme }) => theme.style)

  return (
    <ThemeProvider theme={createMuiTheme(MaterialTheme[style])}>
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <IconButton aria-label='Menu' color='inherit'>
            <MenuIcon />
          </IconButton>
          <Typography color='inherit' variant='h5'>
            crassa-material-ui
          </Typography>
        </Toolbar>
      </AppBar>
      {children}
    </ThemeProvider>
  )
}
