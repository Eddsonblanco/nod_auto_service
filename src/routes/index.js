import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import loadable from '@loadable/component'

import Loading from 'components/Common/Loading'

// layouts

const MainAdmin = loadable(() => import('../containers/layouts/MainAdmin'), {
  fallback: <Loading />
})

const Main = loadable(() => import('../containers/layouts/Main'), {
  fallback: <Loading />
})

const Dashboard = loadable(() => import('../containers/views/Admin/Dashboard'), {
  fallback: <Loading />
})

const Home = loadable(() => import('../containers/views/Main/Home'), {
  fallback: <Loading />
})

export default history => {
  // const pathUrl = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : '/'

  return (
    <ConnectedRouter history={history}>
      {/* <Dashboard history={history}>
        <Route component={Home} exact path={pathUrl} />
      </Dashboard> */}

      <Switch>
        {/* <Route component={Login} path='/login' /> */}

        <Route exact path='/admin/:path?'>
          <MainAdmin>
            <Switch>
              <Route component={Dashboard} exact path='/admin/dashboard' />
              {/* <Route component={Setting} path='/admin/setting' /> */}
            </Switch>
          </MainAdmin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route component={Home} exact path='/' />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </ConnectedRouter>
  )
}
