import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Link
} from 'react-router-dom'
import clsx from 'clsx'

import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Divider,
  Toolbar,
  Button,
  IconButton,
  Typography,
  TextField,
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
  FormControl,
  Select,
  Drawer
} from '@material-ui/core'

import CloseIcon from '@material-ui/icons/Close'

import {
  Menu as MenuIcon,
  Phone as PhoneIcon,
  ExpandMore as ExpandMoreIcon,
  CheckCircle as CheckCircleIcon
} from '@material-ui/icons'

import DateInput from 'components/DatePicker'
import pageHomeDucks from 'reducers/pagehome'
import appoimentDucks from 'reducers/appoiments'

const {
  getPageConfig,
  openAppoiment
} = pageHomeDucks.creators

const {
  createAppoiment,
  closeConfirm
}  = appoimentDucks.creators

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
  callToActionMobile: {
    color        : theme.palette.common.white,
    fontWeight   : 300,
    paddingBottom: 6,
    paddingTop   : 6,
    textAlign    : 'center'
  },
  contentModal: {
    maxWidth: 560,
    width   : '100%'
  },
  descConfirm: {
    fontSize    : 14,
    fontWeight  : 500,
    marginBottom: 20
  },
  dialogActions: {
    display       : 'flex',
    justifyContent: 'flex-end',
    marginTop     : 50
  },
  dialogContent: {

    display: 'flex',

    justifyContent: 'center',
    // alignItems    : 'center',
    marginTop     : 50
  },
  dialogDesc: {
    color       : '#353535',
    fontSize    : 16,
    fontWeight  : 300,
    lineHeight  : 1.86,
    marginBottom: 30,
    textAlign   : 'center'
  },
  dialogTitle: {
    color       : '#353535',
    fontSize    : 22,
    fontStyle   : 'normal',
    fontWeight  : 600,
    lineHeight  : 1.5,
    marginBottom: 20,
    textAlign   : 'center'
  },
  divider: {
    backgroundColor               : theme.palette.common.white,
    height                        : 27,
    margin                        : '0 20px',
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  drawerContent: {
    background: '#353535',
    height    : '100%',
    padding   : '30px 20px',
    width     : '320px'
  },
  drawerList: {
    marginTop: 40
  },
  drawerLogo: {
    '& img': {
      width: '100%'
    },
    margin  : '0 auto',
    maxWidth: '120px'
  },
  formContent: {
    margin  : '0 auto',
    maxWidth: 740,
    width   : '100%'
  },
  formControl: {
    '& .MuiFilledInput-root': {
      '&:before': {
        content: 'none'
      },
      background: 'transparent',
      border    : 'solid 1px rgba(0, 0, 0, 0.23)'
    }
  },
  formTwo: {
    display                     : 'flex',
    flexDirection               : 'column',
    [theme.breakpoints.up('sm')]: {
      flexDirection: 'row'
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
  iconConfirm: {
    color       : '#48c9b0',
    fontSize    : '50px',
    marginBottom: '20px'
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
    maxWidth                    : 100,
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
  modalConfirm: {
    alignItems   : 'center',
    display      : 'flex',
    flexDirection: 'column',
    padding      : 14
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
  rootStep: {
    '& .MuiStepLabel-horizontal': {
      paddingRight: 25
    },
    background: '#f6f6f6',
    margin    : 0,
    padding   : '15px 20px'
  },
  rootSteper: {
    [theme.breakpoints.down('sm')]: {
      '& .MuiStep-horizontal': {
        width: '100%'
      },
      '& .MuiStepButton-root': {
        boxSizing     : 'border-box',
        justifyContent: 'flex-start'
      },
      flexDirection: 'column'
    }
  },
  stepActive: {
    '& .MuiStepIcon-root.MuiStepIcon-active': {
      color: '#fff'
    },
    '& .MuiStepIcon-text': {
      fill: '#f64e4e'
    },
    '& .MuiStepLabel-label.MuiStepLabel-active': {
      color: '#fff'
    },
    '& button': {
      background: '#f64e4e'
    }
  },
  stepComplete: {
    background: 'red'
  },
  titleConfirm: {
    color     : '#353535',
    fontSize  : 20,
    fontWeight: 600
  },
  titleinput: {
    color     : '#353535',
    fontSize  : 14,
    fontWeight: 600,
    lineHeight: 1.8,
    textAlign : 'left'
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

export default function Header() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    logo,
    phone
  } = useSelector(state => state.settings)

  const {
    status,
    services,
    openAppoimentGlobal = false
  } = useSelector(state => state.page_home)

  const {
    status: statusAppoiment
  } = useSelector(state => state.appoiments)

  const [ open, setOpen ] = React.useState(false)
  const [ openDrawer, setOpenDrawer ] = React.useState(false)
  const anchorRef = React.useRef(null)

  // const [ openDialog, setOpenDialog ] = React.useState(openAppoimentGlobal)

  const [ activeStep, setActiveStep ] = React.useState(0)
  const [ completed ] = React.useState({})

  const [ fornDialog, setFormDialog ] = React.useState({
    address       : '',
    city          : '',
    dateEnd       : new Date(),
    dateEndTime   : new Date(),
    dateStart     : new Date(),
    dateStartTime : new Date(),
    description   : '',
    email         : '',
    firstName     : '',
    lastName      : '',
    phone         : '',
    service       : '',
    state         : '',
    vehicleMileage: '',
    vehicleModel  : '',
    vehicleYear   : '',
    zipCode       : ''
  })

  const steps = getSteps()

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getPageConfig())
  }, [ status ])

  useEffect(() => {
    if(statusAppoiment === 'APPOIMENT_CREATED')
      dispatch(openAppoiment())
  }, [ statusAppoiment ])

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if(anchorRef.current && anchorRef.current.contains(event.target))
      return

    setOpen(false)
  }

  const _handleChangeForm = (name, value) => {
    setFormDialog({
      ...fornDialog,
      [name]: value
    })
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
    dispatch(createAppoiment(fornDialog))
  }

  const _handleCloseDialog = () => {
    dispatch(openAppoiment())
  }

  const _handleCloseDialogConfirm = () => {
    dispatch(closeConfirm())
  }

  return (
    <div>
      <AppBar className={classes.toolbarRoot} position='relative'>
        <Toolbar>
          <IconButton
            aria-label='menu'
            className={classes.menuButton}
            color='inherit'
            edge='start'
            onClick={() => { setOpenDrawer(true)}}>
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
                  <Link className={classes.navItem} to='aboutus'>About us</Link>
                  {/* <Link className={classes.navItem} to='/faq'>FAQ</Link> */}
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

                <Button
                  className={classes.callToAction}
                  onClick={() => { dispatch(openAppoiment())}}
                  variant='outlined'>Get an appointment</Button>

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

      {/* drawer */}

      <Drawer onClose={() => {setOpenDrawer(false)}} open={openDrawer}>
        <div className={classes.drawerContent}>
          <div className={classes.drawerLogo}>
            <img src={logo} />
          </div>
          <div className={classes.drawerList} onClick={() => { setOpenDrawer(false)}}>
            <Link className={classes.navItem} to='/'>Home</Link>
            <Link className={classes.navItem} to='/services'>Services</Link>
            <Link className={classes.navItem} to='/contact'>Contact</Link>
            <Link className={classes.navItem} to='aboutus'>About us</Link>
          </div>

          <div onClick={() => { setOpenDrawer(false) }} style={{ marginTop: 50, textAlign: 'center' }}>
            <Button
              className={classes.callToActionMobile}
              onClick={() => { dispatch(openAppoiment()) }}
              variant='outlined'>Get an appointment</Button>
          </div>
        </div>
      </Drawer>

      {/* apoimnet */}

      <Dialog
        aria-labelledby='customized-dialog-title'
        fullScreen
        onClose={_handleCloseDialog}
        open={openAppoimentGlobal}>
        {/* <DialogTitle id='customized-dialog-title' onClose={_handleCloseDialog}>
          Modal title
        </DialogTitle> */}
        {/* <span>
          <img src={`${process.env.PUBLIC_URL}/static/appoiment.png`} />
        </span> */}
        <DialogContent className={classes.dialogContent}>
          <div>
            <IconButton
              onClick={_handleCloseDialog}
              style={{
                position: 'absolute',
                right   : 20,
                top     : 20

              }}>
              <CloseIcon />
            </IconButton>

            <Typography className={classes.dialogTitle}>Answer a few simple questions to get <br />  an appoinment.</Typography>
            <Typography className={classes.dialogDesc}>Service at your home or office · 7 days a week · Fair and transparent pricing.</Typography>
            <Stepper
              activeStep={activeStep}
              className={classes.rootSteper}
              connector={false}
              nonLinear>
              {steps.map((label, index) => (
                <Step
                  classes={
                    {
                      completed: classes.stepComplete
                    }
                  }
                  className={
                    clsx(
                      {
                        [classes.stepActive]: activeStep === index
                      }
                    )
                  }
                  key={label}>
                  <StepButton
                    classes={{
                      root: classes.rootStep
                    }}
                    completed={completed[index]} onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>

            {allStepsCompleted() ? (
              <div className={classes.contentModal}>
                <Typography className={classes.instructions}>
                  All steps completed - you&apos;re finished
                </Typography>
                <Button onClick={handleReset}>Reset</Button>
              </div>
            ) : (
              <div className={classes.formContent}>
                {/* <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography> */}
                {
                  activeStep === 0 ?
                    <>
                      <div>
                        <Typography className={classes.titleinput}>Customer information</Typography>
                      </div>
                      <div className={classes.formTwo}>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('firstName', ev.target.value) }}
                          placeholder='First Name'

                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('lastName', ev.target.value) }}

                          placeholder='Last Name'
                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                      </div>
                      <div>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('address', ev.target.value) }}

                          placeholder='Address'
                          style={{ margin: 8, width: '98%' }}
                          type='text'
                          variant='outlined' />
                      </div>

                      <div className={classes.formTwo}>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('email', ev.target.value) }}
                          placeholder='Email'

                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('phone', ev.target.value) }}
                          placeholder='Phone'

                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                      </div>
                      <div className={classes.formTwo}>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('city', ev.target.value) }}
                          placeholder='City'
                          style={{ margin: 8 }}

                          type='text'
                          variant='outlined' />
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('state', ev.target.value) }}
                          placeholder='State'

                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                      </div>
                      <div>
                        <TextField

                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('zipCode', ev.target.value) }}
                          placeholder='Zip Code'
                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                      </div>
                    </> : null
                }
                {
                  activeStep === 1 ?
                    <>
                      <div className={classes.formTwo}>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('vehicleYear', ev.target.value) }}
                          placeholder='Vehicle Year'

                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('vehicleModel', ev.target.value) }}

                          placeholder='Vehicle Model'
                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />
                      </div>
                      <div className={classes.formTwo}>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('vehicleMileage', ev.target.value) }}
                          placeholder='Vehicle Mileage'
                          style={{ margin: 8 }}
                          type='text'
                          variant='outlined' />

                        <FormControl
                          className={classes.formControl}
                          fullWidth style={{ margin: 8 }} variant='filled'>
                          <Select
                            fullWidth
                            id='demo-simple-select-outlined'
                            label='Age'
                            labelId='demo-simple-select-outlined-label'
                            onChange={ev => { _handleChangeForm('service', ev.target.value)}}
                            value={fornDialog.service}>
                            <MenuItem value=''>
                              <em>Service Needed</em>
                            </MenuItem>
                            {
                              services.map((item, index) => (
                                <MenuItem key={`service-${index}`} value={item.title}>{item.title}</MenuItem>
                              ))
                            }
                          </Select>

                        </FormControl>

                      </div>

                      <div>
                        <TextField
                          fullWidth
                          InputLabelProps={{
                            shrink: false
                          }}
                          margin='normal'
                          onChange={ev => { _handleChangeForm('description', ev.target.value) }}
                          placeholder='Brief description of service needed'
                          style={{ margin: 8, width: '98% ' }}
                          type='text'
                          variant='outlined' />
                      </div>
                    </> : null
                }
                {
                  activeStep === 2 ?
                    <>
                      <div>
                        <Typography>Select your appointment time</Typography>

                      </div>
                      <div className={classes.formTwo}>
                        <DateInput
                          labelDate='First Choice'
                          onChangeDate={date => { _handleChangeForm('dateStart', date)}}
                          onChangeTime={time => { _handleChangeForm('dateStartTime', time) }} />
                      </div>
                      <div>
                        <DateInput
                          labelDate='Second Choice'
                          onChangeDate={date => { _handleChangeForm('dateEnd', date) }}
                          onChangeTime={time => {_handleChangeForm('dateEndTime', time)}} />
                      </div>
                    </> : null
                }
                <div className={classes.dialogActions}>
                  {
                    activeStep > 0 ?
                      <Button className={classes.button} disabled={activeStep === 0} onClick={handleBack}>
                        Back
                      </Button> : null
                  }
                  {
                    activeStep < 2 ?
                      <Button
                        className={classes.button}
                        color='primary'
                        onClick={handleNext}
                        variant='contained'>
                      Next
                      </Button> : null
                  }

                  {
                    activeStep === 2 ?
                      <Button
                        color='primary'
                        onClick={handleComplete}
                        variant='contained'>
                         Complete Step
                      </Button> : null
                  }
                </div>
              </div>
            )}
          </div>
        </DialogContent>

      </Dialog>

      <Dialog
        aria-labelledby='responsive-dialog-response-title'
        onClose={_handleCloseDialogConfirm}
        open={statusAppoiment === 'APPOIMENT_CREATED'}>
        <DialogContent>
          <div className={classes.modalConfirm}>
            <div>
              <CheckCircleIcon className={classes.iconConfirm} />
            </div>
            <Typography className={classes.titleConfirm}>Thank you for giving an appointment.</Typography>
            <Typography className={classes.descConfirm}>We contact you later to continue the process </Typography>

            <Button
              color='primary'
              onClick={_handleCloseDialogConfirm}
              variant='contained'>back to home</Button>
          </div>
        </DialogContent>
      </Dialog>

    </div>
  )
}
