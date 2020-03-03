import React from 'react'

const Nav = props => {
  console.log('===> XAVI <===: props', props)

  return (
    <div className={classes.drawerContent}>
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
    </div>
  )
}

export default Nav
