import React from 'react'
import  './subMenu.scss'
// import '../Common/colors.scss'
import {

  Link

} from 'react-router-dom'
// import { makeStyles } from '@material-ui/styles'

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

const SubMenu = () => {
  // const classes = useStyles()

  return (
    <subMenu className='subMenu'>
      <div className='subMenuContainer'>
        <ul className='subMenuList'>
          <li className='subMenuItem'>
            <Link to='#'>All our services</Link>
          </li>
          <li className='subMenuItem' >
            <Link to='#'>submenu2</Link>
          </li>
          <li className='subMenuItem' >
            <Link to='#'>submenu3</Link>
          </li>

        </ul>
      </div>
    </subMenu>
  )
}

export default SubMenu
