import React, { Component, Fragment } from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'

import DevTools from './DevTools'

export default class Root extends Component {
  render() {
    const { store, children } = this.props

    return (
      <Provider store={store}>
        <Fragment>
          {children}
          <DevTools />
        </Fragment>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
