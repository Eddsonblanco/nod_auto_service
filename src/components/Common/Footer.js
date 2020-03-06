import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, IconButton } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'

const styles = makeStyles({
  footer: {
    borderTop: 'solid 3px #f2f2f2'
  },
  footerContainerTop: {
    // backgroundColor: '#ffffff',
    borderBottom : 'solid 3px #f2f2f2',
    paddingBottom: 20,
    paddingTop   : 20
  },
  listNav: {
    display  : 'flex',
    listStyle: 'none'
  },
  listNavItem: {
    color      : '#353535',
    fontSize   : '1rem',
    fontWeight : 500,
    marginRight: 36
  },
  socialItem: {
    // width: 44px;
    // height: 44px;
    backgroundColor: '#ffffff',
    border         : 'solid 3px #f2f2f2'
  }
})

const Footer = () => {
  const {
    // direction = '',
    // email = '',
    // phone = '',
    // copyright = ''
  } = useSelector(state => state.settings)

  const classes = styles()

  return (
    <footer className={classes.footer}>
      <Container className={classes.footerContainerTop} maxWidth='lg'>
        <Grid
          alignItems='center'
          container
          direction='row'
          justify='space-between'>
          <Grid item>
            logo
          </Grid>

          <Grid item>
            <ul className={classes.listNav}>
              <li className={classes.listNavItem}>HOME</li>
              <li className={classes.listNavItem}>SERVICES</li>
              <li className={classes.listNavItem}>CONTACT</li>
              <li className={classes.listNavItem}>ABOUT US</li>
              <li className={classes.listNavItem}>FAQ</li>
              <li className={classes.listNavItem}>TERMS OF SERVICE</li>
              <li className={classes.listNavItem}>PRIVACY POLICY</li>
            </ul>
          </Grid>

          <Grid item>
            <Grid
              alignItems='center'
              container
              direction='row'
              justify='flex-end'>
              <IconButton className={classes.socialItem}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.socialItem}>
                <TwitterIcon />
              </IconButton>
              <IconButton className={classes.socialItem}>
                <TwitterIcon />
              </IconButton>
            </Grid>

          </Grid>

        </Grid>

      </Container>
    </footer>
  )
}

export default Footer
