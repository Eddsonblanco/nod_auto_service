import React from 'react'
import  './header.scss'
import '../Common/colors.scss'
import {
 
  Link,
  
} from "react-router-dom";
// import { makeStyles } from '@material-ui/styles'
import { CssBaseline, Typography,  } from '@material-ui/core'

// const useStyles = makeStyles({
//   header: {
//     background: 'gray',
//     width     : '100%'
//   },
//   headerContainer: {
//     '& > div': {
//       width: '100%'
//     },
//     background: 'orange',
//     display   : 'flex',
//     height    : 100,
//     margin    : ' 0 auto',
//     width     : '90%'
//   },

//   headerLogoContainer: {
//     alignItems    : 'center',
//     background    : 'white',
//     display       : 'flex',
//     height        : '100%',
//     justifyContent: 'flex-start',
//     width         : '25%'
//     // margin

//   }

// })

const Header = () => {
  // const classes = useStyles()

  return (
    <header className='header'>
      <CssBaseline />
      <div className='headerContainer'>
        <div className='headerLeft'>
          <div className='headerLogoContainer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="60px" height="60px"><linearGradient id="dHdxY4YT~PYrp6g8BUkjBa" x1="21.581" x2="22.085" y1="13.199" y2="50.711" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#6dc7ff"/><stop offset="1" stop-color="#e6abff"/></linearGradient><path fill="url(#dHdxY4YT~PYrp6g8BUkjBa)" d="M35.58,43.99c0.015,0.304,0.031,0.609,0.05,0.917c0.102,1.693,0.255,3.335,0.45,4.924 c0,0-1.01,1.17-2.39,1.17H14.31C10.83,51,8,48.241,8,44.848V18.152C8,14.759,10.83,12,14.31,12h19.38 c1.42,0,0.88,1.238,0.88,1.238c-0.98,2.243-1.86,4.544-2.62,6.854c-1.21,3.715-2.15,7.546-2.79,11.408 c1.586,0.092,3.172,0.184,4.758,0.276c0.571,0.252,1.142,0.505,1.712,0.757c-0.2,3.159-0.25,6.338-0.13,9.496 c0,0.001,0,0.005,0,0.01C35.5,42.046,35.946,43.615,35.58,43.99z"/><linearGradient id="dHdxY4YT~PYrp6g8BUkjBb" x1="31.668" x2="32.408" y1="12.454" y2="50.841" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#dHdxY4YT~PYrp6g8BUkjBb)" d="M46.674,38.929c-2.311,1.131-4.564,1.9-6.674,2.419v2.034 c2.367-0.549,4.935-1.399,7.559-2.686c0.5-0.245,0.691-0.869,0.426-1.359l0,0C47.732,38.868,47.153,38.695,46.674,38.929z M51.8,11H12.27C9.37,11,7,13.34,7,16.213v30.575C7,49.66,9.37,52,12.27,52H51.8c2.9,0,5.27-2.34,5.27-5.213V16.213 C57.07,13.34,54.7,11,51.8,11z M33.58,33.44c-0.16,2.942-0.19,5.904-0.08,8.846c-0.53,0.03-1.03,0.04-1.5,0.04 c-6.276,0-11.342-1.764-14.697-3.407c-0.472-0.231-1.04-0.041-1.29,0.422l0,0.001c-0.269,0.497-0.069,1.112,0.439,1.36 C20.01,42.44,25.37,44.3,32,44.3c0.5,0,1.03-0.01,1.59-0.04c0.01,0.306,0.03,0.602,0.05,0.908c0.1,1.619,0.25,3.238,0.43,4.857 h-21.8c-1.8,0-3.27-1.451-3.27-3.238V16.213c0-1.787,1.47-3.238,3.27-3.238H32.4c-0.82,1.958-1.616,4.075-2.35,6.348 c-1.495,4.627-2.425,8.942-3.003,12.771c-0.014,0.057-0.13,0.573,0.219,0.984c0.235,0.277,0.542,0.344,0.64,0.362 C29.797,33.44,31.689,33.44,33.58,33.44z M55.07,46.787c0,1.787-1.47,3.238-3.27,3.238H36.08c-0.225-1.968-0.395-3.95-0.507-5.913 c1.362-0.138,2.855-0.375,4.427-0.731c2.64-0.612,2.37-2.616,0-2.034c-1.6,0.395-3.11,0.642-4.5,0.79v-0.01 c-0.12-3.199-0.07-6.417,0.13-9.616c-0.012-0.094-0.068-0.427-0.359-0.699c-0.304-0.284-0.659-0.309-0.75-0.313 c-1.787-0.012-3.574-0.023-5.361-0.035c0.64-3.909,1.58-7.789,2.79-11.551c0.76-2.34,1.64-4.67,2.62-6.94H51.8 c1.8,0,3.27,1.451,3.27,3.238V46.787z M40,41.348v2.034C42.64,42.769,42.37,40.765,40,41.348z"/><linearGradient id="dHdxY4YT~PYrp6g8BUkjBc" x1="19.789" x2="20.534" y1="13.046" y2="51.675" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#dHdxY4YT~PYrp6g8BUkjBc)" d="M20,21L20,21c-0.552,0-1,0.448-1,1v4c0,0.552,0.448,1,1,1h0c0.552,0,1-0.448,1-1v-4 C21,21.448,20.552,21,20,21z"/><linearGradient id="dHdxY4YT~PYrp6g8BUkjBd" x1="43.78" x2="44.525" y1="12.586" y2="51.215" gradientUnits="userSpaceOnUse" spreadMethod="reflect"><stop offset="0" stop-color="#1a6dff"/><stop offset="1" stop-color="#c822ff"/></linearGradient><path fill="url(#dHdxY4YT~PYrp6g8BUkjBd)" d="M44,27L44,27c0.552,0,1-0.448,1-1v-4c0-0.552-0.448-1-1-1l0,0c-0.552,0-1,0.448-1,1v4 C43,26.552,43.448,27,44,27z"/></svg>
          </div>
          <ul>
          <li>< Link to="/">Home</Link></li>
          <li>< Link to="/services">Services</Link></li>
          <li>< Link to="/contact">Contact</Link></li>
          <li>< Link to="/fqa">FQA</Link></li>
          </ul>
        </div>
        <div className='headerRight'>
          <Typography>+1 510 555 55 55</Typography>
          <a className='btnAppointment' to="/appoiment">GET AN APPOINTMENT</a>
        </div>
      </div>
    </header>
  )
}

export default Header
