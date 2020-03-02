import React from 'react'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

const Dashboard = loadable(() => import('../containers/views/Dashboard'), {
  fallback: <Loading />
})

const Home = loadable(() => import('../containers/views/Home'), {
  fallback: <Loading />
})

export default history => {
  const pathUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/'

  return (
    <ConnectedRouter history={history}>
      <Dashboard history={history}>
        <Route component={Home} exact path={pathUrl} />
      </Dashboard>
    </ConnectedRouter>
  )
}
