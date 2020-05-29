import React from 'react'
import { Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import { useSelector } from 'react-redux'

function PrivateRoute({ children, ...rest }) {
  const {
    cookies
  } = useSelector(state => state.users)

  React.useEffect(() => {
    if(!cookies) {
      window.location.href = '/login'
    } else {
      const jsDecode = jwt.decode(cookies, { complete: true })
      const dateNow = new Date()
      if(jsDecode.payload.exp < dateNow.getTime()) {
        window.location.href = '/login'
        Cookies.remove('accessToken')
      }
    }
  }, [])

  return (
    <Route
      {...rest}
      render={() => children} />
  )
}

export default PrivateRoute
