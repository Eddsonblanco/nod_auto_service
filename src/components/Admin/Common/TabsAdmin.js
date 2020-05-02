import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box
} from '@material-ui/core'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      aria-labelledby={`simple-tab-${index}`}
      component='div'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      role='tabpanel'
      {...other}>
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index   : PropTypes.any.isRequired,
  value   : PropTypes.any.isRequired
}

const useStyles = makeStyles(theme => ({
  appBar: {
    backgroundColor: 'transparent',
    borderBottom   : 'solid 1px #cacaca',
    boxShadow      : 'none',
    color          : theme.palette.primary.main
  },
  contentPanel: {
    height  : '100%',
    // maxWidth: 540,
    overflow: 'auto'
  },
  root: {
    backgroundColor: '#fff',
    display        : 'flex',
    flexDirection  : 'column',
    flexGrow       : 1,
    // backgroundColor: theme.palette.background.paper,
    height         : '100%'
  }
}))

const TabsAdmin = (props) => {
  const {
    tabHeader = [],
    tabName = '',
    tabContent = []
  } = props
  const classes = useStyles()
  const [ value, setValue ] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <Typography color='primary' style={{ padding: 20 }} variant='h5'>
        {tabName}
      </Typography>
      <AppBar className={classes.appBar} position='static'>
        <Tabs onChange={handleChange} value={value} >
          {
            tabHeader.map((tab, index) => (
              <Tab id={`${tabName}-${index}`} key={`${tabName}-${index}`} label={tab} />
            ))
          }
        </Tabs>
      </AppBar>
      {
        tabContent.map(({ component }, index) => (
          <TabPanel
            className={classes.contentPanel} index={index} key={index}
            value={value}>
            {component}
          </TabPanel>
        ))
      }
    </div>
  )
}

export default TabsAdmin
