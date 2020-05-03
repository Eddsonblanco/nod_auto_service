import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  FormControlLabel,
  Checkbox,
  TextField,
  Switch
} from '@material-ui/core'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import AddBoxIcon from '@material-ui/icons/AddBox'
import DeleteIcon from '@material-ui/icons/Delete'

import { makeStyles } from '@material-ui/core/styles'

import TabsAdmin from 'components/Admin/Common/TabsAdmin'

import pageHomeDucks from 'reducers/pagehome'

import InputImage from 'components/Admin/Common/InputImage'

const {
  getPageConfig,
  updateCheckbox,
  addNewItemBanner,
  updatePositionBannerItem,
  removeBannerItem,
  updateBannersData
} = pageHomeDucks.creators

Sortable.mount(new Swap())

const useStyles = makeStyles(theme => ({
  actionsBanner: {
    '& svg': {
      '&:hover': {
        color    : theme.palette.primary.main,
        transform: 'scale(1.1)'
      },
      cursor      : 'pointer',
      marginBottom: 10
    },
    display      : 'flex',
    flexDirection: 'column',
    marginLeft   : 20
  },
  containerBanner: {
    alignItems: 'center',
    display   : 'flex'
  },
  formBanner: {
    border      : `solid 1px ${theme.palette.primary.light}`,
    flex        : 1,
    marginBottom: 20,
    padding     : 15
  }
}))

const PageHome = () => {
  const dispatch = useDispatch()
  const classes = useStyles()

  const {
    status,
    show_banner,
    show_brands,
    show_newsletter,
    show_services,
    show_testimonials,
    banners
  } = useSelector(state => state.page_home)

  const [ stateBanner, setStateBanner ] = useState([
    {  name: 'aaa' },
    {  name: 'bbbbb' }
  ])

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getPageConfig())
  }, [])

  // actions
  const _handleChangeCheckbox = ev => {
    dispatch(updateCheckbox(ev.target.name, ev.target.checked))
  }

  const _handleChangeBanners = (ev, index) => {
    console.log('===> XAVI <===: _handleChangeBanners -> ev', ev)
    if(ev.name === 'image')
      dispatch(updateBannersData({ [ev.name]: ev.file }, index))
    else if(ev.target.name === 'openAppoiment')
      dispatch(updateBannersData({ [ev.target.name]: ev.target.checked }, index))
    else
      dispatch(updateBannersData({ [ev.target.name]: ev.target.value }, index))
  }

  const _handleAddItemBammer = () => {
    dispatch(addNewItemBanner())
  }

  const _handleChangePositionBanner = (orientation, index) => {
    dispatch(updatePositionBannerItem(orientation, index))
  }

  const _handleClickRemoveBanner = (index) => {
    dispatch(removeBannerItem(index))
  }

  return (
    <TabsAdmin
      tabContent={[
        {
          component: <div>
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show_banner}
                    color='primary'
                    name='show_banner'
                    onChange={_handleChangeCheckbox} />
                }
                label='Show Banner' />
            </div>

            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show_brands}
                    color='primary'
                    name='show_brands'
                    onChange={_handleChangeCheckbox} />
                }
                label='Show Brands' />
            </div>

            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show_newsletter}
                    color='primary'
                    name='show_newsletter'
                    onChange={_handleChangeCheckbox} />
                }
                label='Show Newsletter' />
            </div>

            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show_services}
                    color='primary'
                    name='show_services'
                    onChange={_handleChangeCheckbox} />
                }
                label='Show Services' />
            </div>

            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={show_testimonials}
                    color='primary'
                    name='show_testimonials'
                    onChange={_handleChangeCheckbox} />
                }
                label='Show Testimonials' />
            </div>

          </div>
        },
        {
          component: <div>
            {
              <ReactSortable list={stateBanner} setList={setStateBanner} swap>
                {
                  stateBanner.map((item, index) => (
                    <div key={`banner-${index}`}>
                      <div>
                        <li >{item.name}</li>
                      </div>
                    </div>
                  ))
                }
                {/* {
                  stateBanner.map((item, index) => (

                    <div className={classes.containerBanner} key={`banner-${index}`}>
                      <div className={classes.formBanner}>
                        <div>
                          <TextField
                            fullWidth
                            name='title'
                            onChange={ev => _handleChangeBanners(ev, index)}
                            placeholder='Title'
                            style={{ marginBottom: 20 }}
                            value={item.title} />
                        </div>
                        <div>
                          <TextField
                            fullWidth
                            name='desc'
                            onChange={ev => _handleChangeBanners(ev, index)}
                            placeholder='Sub-title'
                            style={{ marginBottom: 20 }}
                            value={item.desc} />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                          <InputImage
                            error={false}
                            key={`banner-img-${index}`}
                            maxWidth='450px'
                            name='image' onImage={ev => _handleChangeBanners(ev, index)} />
                        </div>

                        <div style={{ marginBottom: 20 }}>
                          <FormControlLabel
                            control={
                              <Switch
                                checked={item.openAppoiment}
                                name='openAppoiment'
                                onChange={ev => _handleChangeBanners(ev, index)} />
                            }
                            label='Boton open modal appoiment' />
                        </div>

                        {
                          !item.openAppoiment &&
                      <div>
                        <TextField
                          fullWidth
                          name='url'
                          onChange={ev => _handleChangeBanners(ev, index)}
                          placeholder='url'
                          style={{ marginBottom: 20 }}
                          value={item.url} />
                      </div>
                        }
                      </div>

                      <div className={classes.actionsBanner}>
                        <DeleteIcon onClick={() => _handleClickRemoveBanner(index)} />
                        {
                          index !== 0 ?
                            <ExpandLessIcon onClick={() => _handleChangePositionBanner('up', item.position)} /> : null
                        }
                        {
                          index !== (banners.length - 1) ?
                            <ExpandMoreIcon onClick={() => _handleChangePositionBanner('down', item.position)} /> : null
                        }
                        {
                          index === (banners.length - 1) ?
                            <AddBoxIcon onClick={_handleAddItemBammer} /> : null
                        }
                      </div>

                    </div>
                  ))
                } */}
              </ReactSortable>

            }
          </div>
        }
      ]}
      tabHeader={[
        'config',
        'Banner'
      ]}
      tabName='Page Home' />
  )
}

export default PageHome
