import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { HelmetProvider } from 'react-helmet-async'
import { loadableReady } from '@loadable/component'

import App from './App'

if(module.hot) module.hot.accept()

const render = (Component, type = 'render') => {
  ReactDOM[type](
    <HelmetProvider>
      <AppContainer key={Math.random()}>
        <Component />
      </AppContainer>
    </HelmetProvider>,
    document.getElementById('root')
  )
}

if(process.env.NODE_ENV === 'production')
  loadableReady(() => {
    render(App, 'hydrate')
  })
else render(App)

// Webpack Hot Module Replacement API
if(module.hot)
  module.hot.accept('./App', () => {
    render(require('./App').default)
  })
