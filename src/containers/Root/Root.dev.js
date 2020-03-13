import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { CssBaseline } from '@material-ui/core'

import PropTypes from 'prop-types'

import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        <CssBaseline />
        {children}
        <DevTools />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
