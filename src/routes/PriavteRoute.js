import React from 'react'
import { Route } from 'react-router-dom'
import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'

import { useSelector } from 'react-redux'

function PrivateRoute({ children, ...rest }) {
  const {
    cookies
  } = useSelector(state => state.users)

  const [ loginIn, setLoginIn ] = React.useState(false)

  React.useEffect(() => {
    if(!cookies) {
      window.location.href = '/login'
    } else {
      const jsDecode = jwt.decode(cookies, { complete: true })
      const dateNow = new Date()
      if(jsDecode.payload.exp < dateNow.getTime()) {
        window.location.href = '/login'
        Cookies.remove('accessToken')
      } else {
        setLoginIn(true)
      }
    }
  }, [])

  return (
    <Route
      {...rest}
      render={() => loginIn ? children : null} />
  )
}

export default PrivateRoute
