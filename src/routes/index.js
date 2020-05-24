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

const HomeAdmin = loadable(() => import('../containers/views/Admin/Home'), {
  fallback: <Loading />
})

const About = loadable(() => import('../containers/views/Admin/About'), {
  fallback: <Loading />
})

const ContactAdmin = loadable(() => import('../containers/views/Admin/Contact'), {
  fallback: <Loading />
})

const Banners = loadable(() => import('../containers/views/Admin/Banners'), {
  fallback: <Loading />
})

const Reservations = loadable(() => import('../containers/views/Admin/Reservations'), {
  fallback: <Loading />
})

const ServicesAdmin = loadable(() => import('../containers/views/Admin/Services'), {
  fallback: <Loading />
})

const NewslettersAdmin = loadable(() => import('../containers/views/Admin/Newsletters'), {
  fallback: <Loading />
})

const ServicesNewAdmin = loadable(() => import('../containers/views/Admin/Services/New'), {
  fallback: <Loading />
})

const ServicesEditAdmin = loadable(() => import('../containers/views/Admin/Services/Edit'), {
  fallback: <Loading />
})

const Users = loadable(() => import('../containers/views/Admin/Users'), {
  fallback: <Loading />
})

const Companies = loadable(() => import('../containers/views/Admin/Companies'), {
  fallback: <Loading />
})

const Testimonials = loadable(() => import('../containers/views/Admin/Testimonials'), {
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

const Service = loadable(() => import('../containers/views/Main/Service'), {
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
              {/* <Route component={ServicesNewAdmin} path='/admin/service/:id' /> */}
              <Route component={Settings} path='/admin/settings' />
              <Route component={HomeAdmin} path='/admin/home' />
              <Route component={About} path='/admin/about' />
              <Route component={ContactAdmin} path='/admin/contact' />
              <Route component={Companies} path='/admin/companies' />
              <Route component={Testimonials} path='/admin/testimonials' />
              <Route component={Banners} path='/admin/banners' />
              <Route component={Reservations} path='/admin/reservations' />
              <Route component={ServicesAdmin} path='/admin/services' />
              <Route component={ServicesNewAdmin} path='/admin/service' />
              <Route component={NewslettersAdmin} path='/admin/newsletters' />
              <Route component={ServicesEditAdmin} path='/admin/service-edit' />
              <Route component={Users} path='/admin/users' />
            </Switch>
          </MainAdmin>
        </Route>

        <Route>
          <Main>
            <Switch>
              <Route component={Home} exact path='/' />
              <Route component={Contact} exact path='/contact' />
              <Route component={Services} exact path='/services' />
              <Route component={Service} exact path='/service/:id' />
              <Route component={Faq} exact path='/faq' />
              <Route component={AboutUs} exact path='/aboutus' />
            </Switch>
          </Main>
        </Route>

      </Switch>
    </ConnectedRouter>
  )
}
