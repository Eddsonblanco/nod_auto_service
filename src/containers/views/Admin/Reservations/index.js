import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  DialogContent,
  Dialog,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import CrudTable from 'components/Admin/Common/CrudTable'

import appoimnentDucks from 'reducers/appoiments'

const {
  getAppoiments,
  getAppoiment,
  resetAppoiment
} = appoimnentDucks.creators

const useStyles = makeStyles(theme => ({
  dataView: {
    fontSize: 16,
    padding : '5px 0 5px 20px'
  },
  detailTitle: {
    borderBottom: 'solid 1px',
    marginBottom: 20,
    marginTop   : 20
  },
  modalDetail: {
    padding: '20px 30px'
  }
}))

const Reservations = () => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const {
    columns,
    rows,
    status,
    pagination,
    appoiment
  } = useSelector(store => store.appoiments)

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getAppoiments())
  }, [])

  const _handleClickEdit = id => {
    dispatch(getAppoiment(id))
  }

  const _handleCloseDialog = () => {
    dispatch(resetAppoiment())
  }

  return (
    <>

      <CrudTable
        table={
          {
            columns,
            onEdit  : _handleClickEdit,
            pagination,
            rows,
            withEdit: true
          // onRemove,
          // modalRemoveMessage,
          // withRemove = false,
          }
        }
        title='Reservations List' />

      <Dialog
        aria-labelledby='responsive-dialog-response-title'
        fullWidth={true}
        maxWidth='md'
        onClose={_handleCloseDialog}
        open={Boolean(appoiment)}>
        <DialogContent>
          <div className={classes.modalDetail}>

            {
              appoiment ?
                <>
                  <Typography className={classes.detailTitle} color='primary' variant='h6'>Personal information</Typography>
                  <Typography className={classes.dataView}>
                    <strong>First Name </strong>:
                    <span> {appoiment.firstName}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Last Name </strong>:
                    <span> {appoiment.lastName}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Email </strong>:
                    <span> {appoiment.email}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Phone </strong>:
                    <span> {appoiment.phone}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>City </strong>:
                    <span> {appoiment.city}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>State </strong>:
                    <span> {appoiment.state}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Address </strong>:
                    <span> {appoiment.address}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Zip Code </strong>:
                    <span> {appoiment.zipCode}</span>
                  </Typography>

                  <Typography className={classes.detailTitle} color='primary' variant='h6'>Service required</Typography>

                  <Typography className={classes.dataView}>
                    <strong>Service </strong>:
                    <span> {appoiment.service}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Description </strong>:
                    <span> {appoiment.description}</span>
                  </Typography>

                  <Typography className={classes.detailTitle} color='primary' variant='h6'>Estimated date</Typography>

                  <Typography className={classes.dataView}>
                    <strong>Date Start </strong>:
                    <span> {appoiment.dateStart}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Date Start Time</strong>:
                    <span> {appoiment.dateStartTime}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Date End </strong>:
                    <span> {appoiment.dateEnd}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Date End Time</strong>:
                    <span> {appoiment.dateEndTime}</span>
                  </Typography>

                  <Typography className={classes.detailTitle} color='primary' variant='h6'>Cart information</Typography>

                  <Typography className={classes.dataView}>
                    <strong>Model </strong>:
                    <span> {appoiment.vehicleModel}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Year </strong>:
                    <span> {appoiment.vehicleYear}</span>
                  </Typography>

                  <Typography className={classes.dataView}>
                    <strong>Mileage </strong>:
                    <span> {appoiment.vehicleMileage}</span>
                  </Typography>
                </>                 :
                null
            }

          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default Reservations
