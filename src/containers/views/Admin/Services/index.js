import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles'

import servicesDucks from 'reducers/services'
import CrudTable from 'components/Admin/Common/CrudTable'
import TabsAdmin from 'components/Admin/Common/TabsAdmin'

const {
  getServices,
  removeService,
  createService,
  getService,
  resetService,
  updateService
} = servicesDucks.creators

const Services = () => {
  const dispatch = useDispatch()

  const {
    status,
    columns,
    rows,
    pagination,
    service
  } = useSelector(state => state.services)

  // const classes = styles()

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getServices())
  }, [])

  const _handleClickRemove = id => {
    dispatch(removeService(id))
  }

  const _handleClickCreate = data => {
    dispatch(createService(data))
  }

  const _handleClickUpdate = data => {
    dispatch(updateService(data))
  }

  const _handleClickEdit = id => {
    dispatch(getService(id))
  }

  const _handleCloseModalEdit = bol => {
    if(bol) dispatch(resetService())
  }

  return (<TabsAdmin
    // tabActions={actions}
    tabContent={[
      <CrudTable
        key='sd'
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
            },
            {
              label   : 'Alt text',
              name    : 'alt_text',
              required: true,
              type    : 'page'
            }
          ],
          onConfirm: _handleClickCreate,
          title    : 'New Company'
        }}
        modalEdit={{
          confirm: 'Update',
          data   : service,
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
        }} />
    ]}
    tabHeader={[
      'Services List'
    ]}
    tabName='Services' />
  )
}

export default Services
