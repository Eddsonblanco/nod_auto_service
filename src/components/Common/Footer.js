
import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter'

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
        color                       : '#353535',
        fontSize                    : '1rem',
        fontWeight                  : 500,
        marginBottom                : 10,
        marginBottom                : 20,
        marginRight                 : 15,
        [theme.breakpoints.up('md')]: {
          fontSize    : '0.875rem',
          marginBottom: 0
        },
        [theme.breakpoints.up('lg')]: {
          fontSize    : '1rem',
          marginBottom: 0
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
          <Grid item md='1' xs='12'>
            <div className={classes.logoContainer}>
              <img src='https://cdn.zeplin.io/5dc2fe76c82d4954cfd1d481/assets/cee9ca9e-99dd-40c5-bc5e-bbd64caaee39.svg' />
            </div>
          </Grid>

          <Grid item md='8' xs='12'>
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

          <Grid item md='2' xs='12'>
            <div className={classes.socialList}>
              <div className={classes.socialItem}>
                <TwitterIcon />
              </div>
              <div className={classes.socialItem}>
                <TwitterIcon />
              </div>
              <div className={classes.socialItem}>
                <TwitterIcon />
              </div>
            </div>

          </Grid>

        </Grid>

        <Grid
          alignItems='center'
          className={classes.containerCopy}
          container
          direction='row'
          justify='space-between'>
          <Typography variant='body2'>Copyright © 2020 All Rights Reserved.</Typography>
          <Typography variant='body2'>Designed by ª <strong>Fernando Goicochea</strong></Typography>
        </Grid>

      </Container>
    </footer>
  )
}

export default Footer
