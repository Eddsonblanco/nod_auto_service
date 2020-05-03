import React from 'react'
import { useSelector } from 'react-redux'
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
  ClickAwayListener,
  Stepper,
  Step,
  StepButton,
  DialogContent,
  Dialog,
  DialogTitle
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
    '& img': {
      width: '100%'
    },
    marginRight                 : 20,
    maxWidth                    : 200,
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

function getSteps() {
  return [
    'Customer information',
    'Vehicle details & Services',
    'Appointment time'
  ]
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return 'Step 1: Select campaign settings...'
    case 1:
      return 'Step 2: What is an ad group anyways?'
    case 2:
      return 'Step 3: This is the bit I really care about!'
    default:
      return 'Unknown step'
  }
}

export default function Header() {
  const classes = useStyles()
  const {
    logo,
    phone
  } = useSelector(state => state.settings)

  const [ open, setOpen ] = React.useState(false)
  const anchorRef = React.useRef(null)

  const [ openDialog, setOpenDialog ] = React.useState(true)

  const [ activeStep, setActiveStep ] = React.useState(0)
  const [ completed, setCompleted ] = React.useState({})
  const steps = getSteps()

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

  const totalSteps = () => {
    return steps.length
  }

  const completedSteps = () => {
    return Object.keys(completed).length
  }

  const isLastStep = () => {
    return activeStep === totalSteps() - 1
  }

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps()
  }

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed)) :
        activeStep + 1
    setActiveStep(newActiveStep)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStep = (step) => () => {
    setActiveStep(step)
  }

  const handleComplete = () => {
    const newCompleted = completed
    newCompleted[activeStep] = true
    setCompleted(newCompleted)
    handleNext()
  }

  const _handleCloseDialog = () => {
    setOpenDialog(false)
  }

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
                  <img src={logo} />
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
                {
                  phone &&
                  <a className={classes.linkPhone} href={`tel:${phone}`}>
                    <PhoneIcon />
                    <Typography className={classes.phoneText} variant='subtitle2'>{phone}</Typography>
                  </a>
                }

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

      {/* apoimnet */}

      {/* <Button color='primary' onClick={handleClickOpen} variant='outlined'>
        Open dialog
      </Button> */}
      {/* <Dialog aria-labelledby='customized-dialog-title' onClose={_handleCloseDialog} open={openDialog}>
        <DialogTitle id='customized-dialog-title' onClose={_handleCloseDialog}>
          Modal title
        </DialogTitle>
        <DialogContent>
          <Stepper
            activeStep={activeStep}
            connector={false}
            nonLinear>
            {steps.map((label, index) => (
              <Step
                key={label}>
                <StepButton completed={completed[index]} onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>

          {allStepsCompleted() ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
              <div>
                <Button className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
                    Back
                </Button>
                <Button
                  className={classes.button}
                  color='primary'
                  onClick={handleNext}
                  variant='contained'>
                    Next
                </Button>
                {activeStep !== steps.length &&
                    (completed[activeStep] ? (
                      <Typography className={classes.completed} variant='caption'>
                        Step {activeStep + 1} already completed
                      </Typography>
                    ) : (
                      <Button color='primary' onClick={handleComplete} variant='contained'>
                        {completedSteps() === totalSteps() - 1 ? 'Finish' : 'Complete Step'}
                      </Button>
                    ))}
              </div>
            </div>
          )}
        </DialogContent>

      </Dialog> */}

    </div>
  )
}
