import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core'

import TabsAdmin from 'components/Admin/Common/TabsAdmin'

import pageHomeDucks from 'reducers/pagehome'

const {
  getPageConfig,
  updateCheckbox,
  updatePageConfig
} = pageHomeDucks.creators

const PageHome = () => {
  const dispatch = useDispatch()

  const {
    status,
    show_banner,
    show_brands,
    show_newsletter,
    show_services,
    show_testimonials,
    banners
  } = useSelector(state => state.page_home)

  const [ stateBanner ] = useState(banners)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getPageConfig())
  }, [])

  // actions
  const _handleChangeCheckbox = ev => {
    dispatch(updateCheckbox(ev.target.name, ev.target.checked))
  }

  const _handleClickSave = () => {
    dispatch(updatePageConfig(stateBanner))
  }

  const actions = (<div>
    <Button
      color='primary'
      onClick={_handleClickSave}
      variant='contained'>Save</Button>
  </div>)

  return (
    <TabsAdmin
      tabActions={actions}
      tabContent={[
        <>
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

        </>

      ]}
      tabHeader={[
        'config'
      ]}
      tabName='Page Home' />
  )
}

export default PageHome
