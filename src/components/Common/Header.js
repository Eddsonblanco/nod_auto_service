import React from 'react'
import {
  Link
} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Divider,
  Toolbar,
  Button,
  IconButton,
  Typography,
  // Link,
  Container,
  Paper,
  Popper,
  MenuList,
  Grow,
  MenuItem,
  ClickAwayListener
} from '@material-ui/core'

import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  ExpandMore as ExpandMoreIcon
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  btnLanguage: {
    '& img': {
      marginRight: theme.spacing(1)
    },
    color: theme.palette.common.white
  },
  callToAction: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
    color                         : theme.palette.common.white,
    fontWeight                    : 300,
    paddingBottom                 : 6,
    paddingTop                    : 6,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }

  },
  divider: {
    backgroundColor               : theme.palette.common.white,
    height                        : 27,
    margin                        : '0 20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  headerLeft: {
    alignItems: 'center',
    display   : 'flex'
  },
  headerRight: {
    alignItems: 'center',
    display   : 'flex'
  },
  headerWrapper: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between'
  },
  linkPhone: {
    '& > svg': {
      marginRight: theme.spacing(1)
    },
    color                       : theme.palette.common.white,
    display                     : 'flex',
    fontSize                    : '0.875rem',
    marginRight                 : 20,
    textDecoration              : 'none',
    [theme.breakpoints.up('lg')]: {
      marginRight: 50
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  logoContainer: {
    marginRight                 : 20,
    [theme.breakpoints.up('lg')]: {
      marginRight: 60
    }
  },
  menuButton: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    },
    marginRight: theme.spacing(2)
  },
  navItem: {
    '&:hover': {
      backgroundColor: theme.palette.primary.main
    },
    alignItems                  : 'center',
    color                       : theme.palette.common.white,
    display                     : 'flex',
    justifyContent              : 'center',
    padding                     : '10px 15px',
    textDecoration              : 'none',
    [theme.breakpoints.up('sm')]: {
      cursor : 'pointer',
      padding: '16px 20px'
    }
  },
  navList: {
    display                       : 'flex',
    listStyle                     : 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  phoneText: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      display: 'block'
    }
  },
  toolbarRoot: {
    backgroundColor: '#353535'
  }
}))

export default function ButtonAppBar() {
  const classes = useStyles()
  const [ open, setOpen ] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if(anchorRef.current && anchorRef.current.contains(event.target))
      return

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if(event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open)
  React.useEffect(() => {
    if(prevOpen.current === true && open === false)
      anchorRef.current.focus()

    prevOpen.current = open
  }, [ open ])

  return (
    <div>
      <AppBar className={classes.toolbarRoot} position='relative'>
        <Toolbar>
          <IconButton
            aria-label='menu'
            className={classes.menuButton}
            color='inherit'
            edge='start'>
            <MenuIcon />
          </IconButton>
          <Container maxWidth='lg'>
            <div className={classes.headerWrapper}>
              <div className={classes.headerLeft}>
                <div className={classes.logoContainer}>
                  <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/c54e8fa6-451f-4a7c-9b6e-b3a04c250649.svg' />
                </div>
                <nav className={classes.navList}>
                  <Link className={classes.navItem} to='/'>Home</Link>
                  <Link className={classes.navItem} to='/services'>Services</Link>
                  <Link className={classes.navItem} to='/contact'>Contact</Link>
                  <Link className={classes.navItem} to='about'>About us</Link>
                  <Link className={classes.navItem} to='/faq'>FAQ</Link>
                </nav>
              </div>
              <div className={classes.headerRight}>

                <a className={classes.linkPhone} href='tel:4159887557'>
                  <PhoneIcon />
                  <Typography className={classes.phoneText} variant='subtitle2'>(415) 988-7557</Typography>
                </a>

                <Button className={classes.callToAction} variant='outlined'>Get an appointment</Button>

                <Divider className={classes.divider} orientation='vertical' />

                <div>
                  <Button
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup='true'
                    className={classes.btnLanguage}
                    onClick={handleToggle}
                    ref={anchorRef}>
                    <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/43dcf9b5-fc1e-4839-8d56-339919f35cf6.svg' />
                    EN
                    <ExpandMoreIcon />
                  </Button>
                  <Popper
                    anchorEl={anchorRef.current} disablePortal open={open}
                    role={undefined} transition>
                    {({ TransitionProps, placement }) => (
                      <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}>
                        <Paper>
                          <ClickAwayListener onClickAway={handleClose}>
                            <MenuList autoFocusItem={open} id='menu-list-grow' onKeyDown={handleListKeyDown}>
                              <MenuItem onClick={handleClose}>English</MenuItem>
                              <MenuItem onClick={handleClose}>Español</MenuItem>
                            </MenuList>
                          </ClickAwayListener>
                        </Paper>
                      </Grow>
                    )}
                  </Popper>
                </div>

              </div>
            </div>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  )
}
