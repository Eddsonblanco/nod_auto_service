import React from 'react'
import { Route } from 'react-router-dom'
import jwt from 'jsonwebtoken'
import Cookies from 'js-cookie'

import { useSelector, useDispatch } from 'react-redux'

import userDucks from 'reducers/users'

const {
  setCookies
} = userDucks.creators

function PrivateRoute({ children, ...rest }) {
  const dispatch = useDispatch()
  const cookies = Cookies.get('accessToken')
  const {
    cookies: cokieReduce
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
        if(!cokieReduce)
          dispatch(setCookies(cookies))

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
