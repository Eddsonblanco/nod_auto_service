
import React from 'react'
import {
  Link
} from 'react-router-dom'

import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import FacebookIcon from '@material-ui/icons/Facebook'

const styles = makeStyles(theme => {
  return (
    {
      containerCopy: {
        '& > p': {
          width: '100%'
        },
        borderTop                             : 'solid 3px #f2f2f2',
        marginTop                             : 20,
        paddingBottom                         : 20,
        paddingTop                            : 20,
        textAlign                             : 'center',
        // eslint-disable-next-line sort-keys-fix/sort-keys-fix
        '@media screen and (min-width: 540px)': {
          '& > p': {
            width: 'auto'
          }
        }
      },
      footer: {
        borderTop: 'solid 3px #f2f2f2'
      },
      footerContainerTop: {
        paddingTop: 20
      },
      listNav: {
        display       : 'flex',
        flexDirection : 'column',
        flexDirection : 'row',
        flexWrap      : 'wrap',
        justifyContent: 'center',
        listStyle     : 'none',
        margin        : '0',
        padding       : '0'
      },
      listNavItem: {
        '&:hover': {
          color: theme.palette.primary.main
        },
        color                       : '#353535',
        fontSize                    : '1rem',
        fontWeight                  : 500,
        marginBottom                : 20,
        marginRight                 : 15,
        textDecoration              : 'none',
        [theme.breakpoints.up('md')]: {
          fontSize    : '0.875rem',
          marginBottom: 0
        },
        [theme.breakpoints.up('lg')]: {
          // fontSize    : '1rem',
          marginBottom: 0,
          marginRight : 30
        }
      },
      logoContainer: {
        '& > img': {
          width: '100%'
        },
        margin                      : '0 auto',
        marginBottom                : 30,
        maxWidth                    : 150,
        [theme.breakpoints.up('md')]: {
          marginBottom: 0
        }
      },
      socialItem: {
        '& > svg': {
          color   : '#d5d5d5',
          fontSize: 16
        },
        alignItems                  : 'center',
        backgroundColor             : '#ffffff',
        border                      : 'solid 3px #f2f2f2',
        borderRadius                : '50%',
        display                     : 'flex',
        height                      : 44,
        justifyContent              : 'center',
        marginRight                 : 20,
        width                       : 44,
        [theme.breakpoints.up('md')]: {
          marginRight: 10
        }
      },
      socialList: {
        display                     : 'flex',
        justifyContent              : 'center',
        paddingTop                  : 20,
        [theme.breakpoints.up('md')]: {
          justifyContent: 'flex-end',
          paddingTop    : 0
        }
      }
    }
  )
})

const Footer = () => {
  const {
    copyright,
    facebook,
    twitter,
    instagram,
    logo_footer
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
          <Grid item md={1} xs={12}>
            <div className={classes.logoContainer}>
              <img src={logo_footer} />
            </div>
          </Grid>

          <Grid item md={8} xs={12}>
            <ul className={classes.listNav}>
              <Link className={classes.listNavItem} to='/'>HOME</Link>
              <Link className={classes.listNavItem} to='/services'>SERVICES</Link>
              <Link className={classes.listNavItem} to='/contact'>CONTACT</Link>
              <Link className={classes.listNavItem} to='/aboutus'>ABOUT US</Link>
            </ul>
          </Grid>

          <Grid item md={2} xs={12}>
            <div className={classes.socialList}>
              {
                twitter &&
                <a className={classes.socialItem} href={twitter}>
                  <TwitterIcon />
                </a>
              }
              {
                facebook &&
                <a className={classes.socialItem} href={facebook}>
                  <FacebookIcon />
                </a>
              }
              {
                instagram &&
                <a className={classes.socialItem} href={instagram}>
                  <InstagramIcon />
                </a>
              }
            </div>

          </Grid>

        </Grid>

        <Grid
          alignItems='center'
          className={classes.containerCopy}
          container
          direction='row'
          justify='space-between'>
          <Typography variant='body2'>{copyright}</Typography>
          <Typography variant='body2'>Designed by ª <strong>Fernando Goicochea</strong></Typography>
        </Grid>

      </Container>
    </footer>
  )
}

export default Footer
