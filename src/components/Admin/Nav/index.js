import React from 'react'
import { Link as RouterLink, useHistory } from 'react-router-dom'

import {
  Drawer,
  List,
  ListItem,
  Link,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'

import {
  Home as HomeIcon,
  Settings as SettingsIcon
  // Business as BusinessIcon,
  // Share as ShareIcon
} from '@material-ui/icons'

import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 210
const drawerWidthMin = 56

const _handlePreventRoute = mUrl => (ev) => {
  if(location.pathname === mUrl) ev.preventDefault()
}

const useStyles = makeStyles(theme => ({
  drawerContent: {
    width: drawerWidthMin
  },
  // drawerContentIcon: {
  //   '&:hover': {
  //     backgroundColor: theme.palette.primary[600]
  //   },
  //   backgroundColor: theme.palette.primary[600],
  //   color          : theme.palette.common.white,
  //   height         : 50,
  //   justifyContent : 'flex-end'
  // },
  drawerIcon: {
    color: 'inherit'
  },
  drawerLabel: {
    '& > span': {
      fontSize: '1rem'
    },
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
  },
  drawerPaper: {
    '&:hover': {
      '& $drawerLabel': {
        opacity  : 1,
        transform: 'translate3d(0px, 0, 0)'
      },
      boxShadow: '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
      width    : drawerWidth
    },
    background : theme.palette.primary.main,
    borderRight: '0',
    overflow   : 'hidden',
    position   : 'absolute',
    transition : theme.transitions.create('width', {
      duration: theme.transitions.duration.standard,
      easing  : theme.transitions.easing.easeInOut
    }),
    whiteSpace: 'nowrap',
    width     : drawerWidth,
    zIndex    : 10
  },
  drawerPaperClose: {
    '& $drawerLabel': {
      opacity  : 0,
      transform: 'translate3d(-25px, 0, 0)'
    },
    width: drawerWidthMin
  },
  hiddenUpMobile: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  iconMenu: {
    color: theme.palette.common.white
  },
  linkLabel: {
    '&:after': {
      backgroundColor: theme.palette.primary.main,
      bottom         : -2,
      content        : '""',
      height         : 1,
      left           : 0,
      position       : 'absolute',
      right          : 0,
      transform      : 'scaleX(0)',
      transition     : 'all .2s ease 0s'
    },
    '&:hover': {
      '&:after': {
        transform: 'scaleX(1)'
      }
    },
    cursor  : 'pointer',
    position: 'relative'
  },
  linkLabelSecondary: {
    '&:after': {
      backgroundColor: theme.palette.secondary.main
    }
  },
  logoCompany: {
    '& > img': {
      maxHeight: 50,
      maxWidth : 115
    },
    alignItems    : 'center',
    cursor        : 'pointer',
    display       : 'flex',
    height        : 64,
    justifyContent: 'center',
    // marginLeft    : theme.spacing(3),
    // marginRight   : 10,
    margin        : theme.spacing(0, 1),
    position      : 'relative'
  },
  main: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'auto'
    },
    backgroundColor: theme.palette.grey[200],
    display        : 'flex',
    flex           : 1,
    height         : '100%',
    overflow       : 'hidden',
    position       : 'relative'
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  menuDashboardItem: {
    alignItems: 'center',
    display   : 'flex',
    padding   : theme.spacing(1, 2),
    width     : '100%'
  },
  menuDashboardItemLink: {
    display: 'flex'
  },
  menuDashboardListItem: {
    // '&:hover': {
    //   backgroundColor: theme.palette.primary[600]
    // },
    color  : theme.palette.common.white,
    padding: 0
  },
  menuDashboardListItemActive: {
    '&:hover': {
      backgroundColor: theme.palette.common.white
    },
    // '& > div': {
    //   color: 'inherit'
    // },
    // '&:active': {
    //   backgroundColor: theme.palette.common.white,
    //   color          : theme.palette.primary.main
    // },
    backgroundColor: theme.palette.common.white,
    color          : theme.palette.primary.main
  },
  menuItemContentName: {
    '&:focus': {
      outline: 'none'
    },
    display      : 'flex',
    flexDirection: 'column'
  },
  menuItemName: {
    fontSize  : '1rem',
    fontWeight: 600,
    lineHeight: '1.5',
    minHeight : 'auto',
    padding   : theme.spacing(1, 2)
  },
  menuLink: {
    '& > a': {
      color  : theme.palette.grey[800],
      display: 'block',
      width  : '100%'
    },
    '& > a:hover': {
      textDecoration: 'none'
    },
    '&:hover': {
      textDecoration: 'none'
    },
    padding       : theme.spacing(1, 2),
    textDecoration: 'none',
    width         : '100%'
  },
  notificationIcon: {
    '& svg': {
      fontSize: '1.75rem'
    },
    '&:hover': {
      backgroundColor: 'transparent',
      color          : theme.palette.grey[500]
    },
    color: theme.palette.grey[600]
  },
  profileName: {
    alignItems     : 'center',
    backgroundColor: theme.palette.grey[200],
    border         : `2px solid ${theme.palette.primary.main}`,
    borderRadius   : '50%',
    color          : theme.palette.grey[500],
    display        : 'flex',
    fontSize       : '0.75rem',
    height         : 34,
    justifyContent : 'center',
    position       : 'relative',
    width          : 34
  },
  root: {
    display                       : 'flex',
    flexDirection                 : 'column',
    height                        : '100vh',
    overflow                      : 'hidden',
    width                         : '100%',
    [theme.breakpoints.down('sm')]: {
      height   : '100%',
      minHeight: '100vh'
    }
  },
  title: {
    color   : theme.palette.primary.main,
    flexGrow: 1
  },
  toolbar: {
    display       : 'flex',
    justifyContent: 'space-between',
    paddingRight  : 24 // keep right padding when drawer closed
  },
  toolbarCenter: {
    display       : 'flex',
    flex          : 1,
    justifyContent: 'space-between'
    // padding       : theme.spacing(0, 1)
  },
  toolbarCenterLeft: {
    '& > a': {
      '&:first-child': {
        marginLeft: 0
      },
      marginLeft: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  toolbarCenterRight: {
    '& > a': {
      '&:last-child': {
        marginRight: 0
      },
      marginRight: theme.spacing(1)
    },
    padding: theme.spacing(0, 1)
  },
  topBar: {
    backgroundColor: theme.palette.common.white,
    boxShadow      : '0px 2px 5px rgba(0, 0, 0, 0.1)'
  },
  wrapperContent: {
    [theme.breakpoints.down('sm')]: {
      overflow: 'initial'
    },
    borderRadius  : 4,
    display       : 'flex',
    flex          : 1,
    justifyContent: 'center',
    // margin        : theme.spacing(1),
    // overflow      : 'auto',
    overflow      : 'hidden',
    padding       : theme.spacing(1),
    position      : 'relative'
    // width         : `calc(100% - ${drawerWidthMin}px)`
  }
}), { name: 'Dashboard' })

const isExternalURL = str => new RegExp('^(https?:\\/\\/)?' +
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
  '((\\d{1,3}\\.){3}\\d{1,3}))' +
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
  '(\\?[;&a-z\\d%_.~+=-]*)?' +
  '(\\#[-a-z\\d_]*)?$', 'i').test(str)

const Nav = props => {
  const {
    menus = [
      {
        _id  : 1,
        icon : <HomeIcon />,
        title: 'Dashboard',
        url  : '/admin/dashboard'
      },
      {
        _id  : 2,
        icon : <HomeIcon />,
        title: 'page home',
        url  : '/admin/home'
      },
      {
        _id  : 3,
        icon : <HomeIcon />,
        title: 'Page about',
        url  : '/admin/about'
      },
      {
        _id  : 4,
        icon : <HomeIcon />,
        title: 'page contact',
        url  : '/admin/conact'
      },
      {
        _id  : 5,
        icon : <HomeIcon />,
        title: 'Page service',
        url  : '/admin/service'
      },
      {
        _id  : 6,
        icon : <HomeIcon />,
        title: 'Companies',
        url  : '/admin/companies'
      },
      {
        _id  : 7,
        icon : <HomeIcon />,
        title: 'Insurances',
        url  : '/admin/insurances'
      },
      {
        _id  : 8,
        icon : <HomeIcon />,
        title: 'Services',
        url  : '/admin/services'
      },
      {
        _id  : 9,
        icon : <HomeIcon />,
        title: 'Reservations',
        url  : '/admin/reservations'
      },
      {
        _id  : 10,
        icon : <HomeIcon />,
        title: 'Users',
        url  : '/admin/users'
      },
      {
        _id  : 11,
        icon : <SettingsIcon />,
        title: 'Settings',
        url  : '/admin/settings'
      }

    ],
    isOpenDrawer = false
  } = props

  const history = useHistory()

  const {
    location
  } = history

  const classes = useStyles()

  return (

    <Drawer
      classes={{
        paper: clsx(
          classes.drawerPaper,
          {
            [classes.drawerPaperClose]: !isOpenDrawer
          }
        )
      }}
      open={isOpenDrawer}
      variant='permanent'>
      <List disablePadding>
        {/* <ListItem
              button
              className={classes.drawerContentIcon}
              onClick={_handleClickToggleDrawer}>
              {
                isOpenDrawer ? <ChevronLeftIcon /> : <MenuIcon />
              }
            </ListItem>
            <Divider /> */}
        {
          menus.map((item, index) => {
            const linkProps = isExternalURL(item.url) ?
              {
                href: item.url
              } :
              {
                component: RouterLink,
                to       : item.url
              }

            return (
              (
                <ListItem
                  button
                  className={clsx(
                    classes.menuDashboardListItem,
                    {
                      [classes.menuDashboardListItemActive]: location.pathname === item.url
                    }
                  )}
                  disableGutters
                  key={index}>
                  <Link
                    className={classes.menuDashboardItem}
                    color='inherit'
                    onClick={_handlePreventRoute(item.url)}
                    target={item.target}
                    underline='none'
                    {...linkProps}>
                    {
                      item.icon ?
                        <ListItemIcon className={classes.drawerIcon}>
                          {item.icon}
                        </ListItemIcon> :
                        null
                    }
                    <ListItemText
                      className={classes.drawerLabel}
                      primary={item.title} />
                  </Link>
                </ListItem>
              )
            )
          })
        }
      </List>
    </Drawer>

  )
}

export default Nav
