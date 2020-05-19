import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

// import { makeStyles } from '@material-ui/core/styles'

import testimonialsDucks from 'reducers/testimonials'
import CrudTable from 'components/Admin/Common/CrudTable'

const {
  getTestimonials,
  removeTestimonial,
  createTestimonial,
  getTestimonial,
  resetTestimonial,
  updateTestimonial
} = testimonialsDucks.creators

const Testimonials = () => {
  const dispatch = useDispatch()

  const {
    status,
    columns,
    rows,
    pagination,
    testimonial
  } = useSelector(state => state.testimonials)

  // const classes = styles()

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getTestimonials())
  }, [])

  const _handleClickRemove = id => {
    dispatch(removeTestimonial(id))
  }

  const _handleClickCreate = data => {
    dispatch(createTestimonial(data))
  }

  const _handleClickUpdate = data => {
    dispatch(updateTestimonial(data))
  }

  const _handleClickEdit = id => {
    dispatch(getTestimonial(id))
  }

  const _handleCloseModalEdit = bol => {
    if(bol) dispatch(resetTestimonial())
  }

  return (
    <CrudTable
      btnAdd='New Testimonial'
      modalAdd={{
        cancel : 'Cancel',
        confirm: 'Confirm',
        form   : [
          {
            label   : 'Author',
            name    : 'author',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Date',
            name    : 'date',
            required: false,
            type    : 'text'
          },
          {
            label    : 'Description',
            maxLength: 150,
            name     : 'desc',
            required : true,
            type     : 'textarea'
          }
        ],
        onConfirm: _handleClickCreate,
        title    : 'New Testimony'
      }}
      modalEdit={{
        confirm: 'Update',
        data   : testimonial,
        form   : [
          {
            label   : 'Author',
            name    : 'author',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Date',
            name    : 'date',
            required: false,
            type    : 'text'
          },
          {
            label   : 'Description',
            name    : 'desc',
            required: true,
            type    : 'textarea'
          }
        ],
        onConfirm: _handleClickUpdate,
        onReset  : _handleCloseModalEdit,
        title    : 'Edit Testimonial'
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
      title='Testimonials List' />
  )
}

export default Testimonials
