import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import CrudTable from 'components/Admin/Common/CrudTable'

import appoimnentDucks from 'reducers/appoiments'

const {
  getAppoiments
} = appoimnentDucks.creators

const Reservations = () => {
  const dispatch = useDispatch()
  const {
    columns,
    rows,
    status,
    pagination
  } = useSelector(store => store.appoiments)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getAppoiments())
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
      title='Reservations List' />
  )
}

export default Reservations
