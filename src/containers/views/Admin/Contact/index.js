import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CrudTable from 'components/Admin/Common/CrudTable'

import contactsDucks from 'reducers/contacts'

const {
  getContacts
} = contactsDucks.creators

const Contact = () => {
  const dispatch = useDispatch()
  const {
    columns,
    rows,
    status,
    pagination
  } = useSelector(store => store.contacts)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getContacts())
  }, [])

  return (
    <CrudTable
      table={
        { columns,
          pagination,
          rows
          // onRemove,
          // onEdit,
          // modalRemoveMessage,
          // withRemove = false,
          // withEdit = false
        }
      }
      title='Contact List' />
  )
}

export default Contact
