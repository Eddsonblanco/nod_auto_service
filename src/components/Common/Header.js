import React from 'react'
import { makeStyles } from "@material-ui/styles";
import { CssBaseline, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  header: {
    width: '100%',
    background: 'gray',
  },
  headerContainer: {
    background: 'orange',
    display: 'flex',
    margin: ' 0 auto',
    '& > div': {
      width: '100%'
    },
    height: 100,
    width: '90%',
  },

  headerLogoContainer: {
      display: 'flex',
      alignItems: 'center',
      background: 'white',
      height: '100%',
      justifyContent: 'flex-start',
      width: '25%'
      margin
    
  }













});

const Header = () => {
  const classes = useStyles()

  return (
    <header className={classes.header}>
      <CssBaseline />
      <div className={classes.headerContainer}>
        <div className={classes.headerLeft}>
          <div className={classes.headerLogoContainer}>
            <img className={classes.headerLogo} src=""  alt="logo" />
          </div>
        </div>
        <div className={classes.headerRight}>
          <Typography>Phone</Typography>
          <Button color="primary" variant="contained">
            action
          </Button>
        </div>
      </div>
    </header>
  );
}

export default Header
