import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CrudTable from 'components/Admin/Common/CrudTable'

import newslettersDucks from 'reducers/newsletters'

const {
  getNewsletters
} = newslettersDucks.creators

const newsletter = () => {
  const dispatch = useDispatch()
  const {
    columns,
    rows,
    status,
    pagination
  } = useSelector(store => store.newsletters)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getNewsletters())
  }, [])

  return (
    <CrudTable
      table={
        {
          columns,
          pagination,
          rows
          // onRemove,
          // onEdit,
          // modalRemoveMessage,
          // withRemove = false,
          // withEdit = false
        }
      }
      title='NewSletter List' />
  )
}

export default newsletter
