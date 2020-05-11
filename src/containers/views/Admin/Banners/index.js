import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles'

import bannersDucks from 'reducers/banners'
import CrudTable from 'components/Admin/Common/CrudTable'

const {
  getBanners,
  removeBanner,
  createBanner,
  getBanner,
  resetBanner,
  updateBanner
} = bannersDucks.creators

const Banners = () => {
  const dispatch = useDispatch()

  const {
    status,
    columns,
    rows,
    pagination,
    banner
  } = useSelector(state => state.banners)

  // const classes = styles()

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getBanners())
  }, [])

  const _handleClickRemove = id => {
    dispatch(removeBanner(id))
  }

  const _handleClickCreate = data => {
    dispatch(createBanner(data))
  }

  const _handleClickUpdate = data => {
    dispatch(updateBanner(data))
  }

  const _handleClickEdit = id => {
    dispatch(getBanner(id))
  }

  const _handleCloseModalEdit = bol => {
    if(bol) dispatch(resetBanner())
  }

  return (
    <CrudTable
      btnAdd='New Banner'
      modalAdd={{
        cancel : 'Cancel',
        confirm: 'Confirm',
        form   : [
          {
            label   : 'Title',
            name    : 'title',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Sub Title',
            name    : 'sub_title',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Image',
            name    : 'image',
            required: true,
            type    : 'image'
          },
          {
            label   : 'Alt text',
            name    : 'alt_text',
            required: true,
            type    : 'text'
          }
        ],
        onConfirm: _handleClickCreate,
        title    : 'New Company'
      }}
      modalEdit={{
        confirm: 'Update',
        data   : banner,
        form   : [
          {
            label   : 'Title',
            name    : 'title',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Sub Title',
            name    : 'sub_title',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Image',
            name    : 'image',
            required: true,
            type    : 'image'
          },
          {
            label   : 'Alt text',
            name    : 'alt_text',
            required: true,
            type    : 'text'
          }
        ],
        onConfirm: _handleClickUpdate,
        onReset  : _handleCloseModalEdit,
        title    : 'Edit Banner'
      }}
      table={{
        columns,
        modalRemoveMessage: {
          cancel : 'Cancel',
          confirm: 'Confirm',
          title  : 'Are you sure?'
        },
        onEdit    : _handleClickEdit,
        onRemove  : _handleClickRemove,
        pagination,
        rows,
        withEdit  : true,
        withRemove: true
      }}
      title='Banners List' />
  )
}

export default Banners
