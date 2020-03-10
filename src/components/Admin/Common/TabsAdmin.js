import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

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
  root: {
    // backgroundColor: theme.palette.background.paper,
    flexGrow: 1
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
        tabContent.map((tabItem, index) => (
          <TabPanel index={index} key={index} value={value}>
            {tabItem}
          </TabPanel>
        ))
      }
    </div>
  )
}

export default TabsAdmin
