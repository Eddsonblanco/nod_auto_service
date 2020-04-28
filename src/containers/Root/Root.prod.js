import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { CssBaseline } from '@material-ui/core'

export default class Root extends Component {
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side')
    if(jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
  }

  render() {
    const { store, children } = this.props

    return (<Provider store={store}>
      <CssBaseline />
      {children}
    </Provider>)
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
