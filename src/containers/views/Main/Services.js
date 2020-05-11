import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/styles'
// import clsx from 'clsx'

import {
  Breadcrumbs,
  Typography,
  Link,
  Container,
  FormControl,
  OutlinedInput,
  InputAdornment,
  IconButton
} from '@material-ui/core'

import SearchIcon from '@material-ui/icons/Search'

import CardService from 'components/CardService'

import servicesMainDucks from 'reducers/main/services'

const {
  getServices
} = servicesMainDucks.creators

const useStyles = makeStyles({
  breadcrumbs: {
    marginTop: 20
  },
  containerServices: {
    display            : 'grid',
    gridGap            : '30px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 360px))',
    justifyContent     : 'center'
  },
  search: {
    marginBottom: 45,
    width       : '100%'
  },
  separator: {
    backgroundColor: '#f64e4e',
    borderRadius   : '50%',
    height         : 3,
    width          : 3
  },
  title: {
    color       : '#353535',
    // font- family: Poppins;
    fontSize    : '1.5rem',
    fontWeight  : 600,
    marginBottom: 15,
    marginTop   : 15
  }

})

export default function Services() {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    status,
    rows: services = []
  } = useSelector(state => state.main_services)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getServices())
  }, [])

  return (
    <Container>
      <Breadcrumbs
        aria-label='breadcrumb' className={classes.breadcrumbs}
        separator={<span className={classes.separator} />}>
        <Link color='inherit' href='/'>
          Home
        </Link>
        <Typography color='textPrimary'>All Services</Typography>
      </Breadcrumbs>

      <Typography className={classes.title}>All Our Services</Typography>

      <FormControl className={classes.search} variant='outlined'>
        <OutlinedInput
          id='outlined-adornment-password'
          placeholder='Search a service we offer you'
          // onChange={handleChange('password')}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                // onClick={handleClickShowPassword}
                // onMouseDown={handleMouseDownPassword}
                aria-label='toggle password visibility'>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          type='text' />
      </FormControl>

      <div className={classes.containerServices}>
        {
          services.map((item, index) => (
            <CardService data={item} key={index} />
          ))
        }
      </div>

    </Container>
  )
}
