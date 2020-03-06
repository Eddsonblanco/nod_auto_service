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

// admin

const Dashboard = loadable(() => import('../containers/views/Admin/Dashboard'), {
  fallback: <Loading />
})

const Settings = loadable(() => import('../containers/views/Admin/Settings'), {
  fallback: <Loading />
})

// main

const Home = loadable(() => import('../containers/views/Main/Home'), {
  fallback: <Loading />
})

const Contact = loadable(() => import('../containers/views/Main/Contact'), {
  fallback: <Loading />
})

const Services = loadable(() => import('../containers/views/Main/Services'), {
  fallback: <Loading />
})
const Faq = loadable(() => import('../containers/views/Main/Faq'), {
  fallback: <Loading />
})
const AboutUs = loadable(() => import('../containers/views/Main/AboutUs'), {
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
              <Route component={Settings} path='/admin/settings' />
            </Switch>
          </MainAdmin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={Contact} exact path='/contact' />
              <Route component={Services} exact path='/services' />
              <Route component={Faq} exact path='/faq' />
              <Route component={AboutUs} exact path='/aboutUs' />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </ConnectedRouter>
  )
}
