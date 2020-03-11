import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Container,
  Grid,
  Typography,
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  TextField
} from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form'

import Table from 'components/Admin/Common/Table'
import InputImage from './InputImage'

const styles = makeStyles(theme => (
  {
    btnAdd: {
      marginLeft: theme.spacing(3)
    },
    container: {
      paddingBottom: 20,
      paddingTop   : 20
    },
    title: {
      color: theme.palette.primary.main
    },
    titleContent: {
      alignItems  : 'flex-end',
      display     : 'flex',
      marginBottom: theme.spacing(3)
    }
  }
))

const CrudTable = props => {
  const {
    title,
    btnAdd,
    table: {
      rows,
      columns,
      pagination,
      onRemove,
      modalRemoveMessage
    },
    modalAdd: {
      cancel: modalAddCancel = 'Cancel',
      confirm: modalAddConfirm = 'Confirm',
      form: modalAddForm = [],
      title: titleModalAdd = 'New',
      onConfirm: onConfirmModalAdd = () => {}
    }
  } = props
  const classes = styles()
  const methods = useForm()
  const { handleSubmit, control } = methods

  const [ inputs, setInputs ] = useState({})
  // const { register, handleSubmit, watch, errors } = useForm()

  const onSubmit = data => {
    onConfirmModalAdd({
      ...inputs,
      ...data
    })
  }

  const _handleChangeImage = ({ name, file }) => {
    setInputs({
      ...inputs,
      [name]: file
    })
  }

  return (
    <Container
      maxWidth={false}
      style={{
        backgroundColor: '#fff'
      }}>
      <Grid className={classes.container} container>
        <div className={classes.titleContent}>
          {
            title && <Typography className={classes.title} variant='h5'>{title}</Typography>
          }
          {
            btnAdd ?
              <Button
                className={classes.btnAdd}
                color='primary'
                size='small'
                variant='outlined'>{btnAdd}</Button> : null
          }
        </div>
        <Grid container>
          <Grid item xs>
            <Table
              columns={columns}
              onRemove={onRemove}
              pagination={pagination}
              rows={rows}
              withActions
              withPagination
              withRemove />
          </Grid>
        </Grid>
      </Grid>

      {/* modals */}
      <Dialog
        // fullScreen={true}
        // onClose={handleClose}
        open={true}>
        <DialogTitle>{titleModalAdd}</DialogTitle>
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogContent>
            {
              modalAddForm.map((input, index) => {
                switch (input.type) {
                  case 'image':

                    return (
                      <InputImage
                        key={`${input.name}-${index}`}
                        name={input.name}
                        onImage={_handleChangeImage} />
                    )
                  case 'text':

                    return (
                      <Controller
                        as={<TextField fullWidth label={input.label} margin='dense' />}
                        control={control}
                        defaultValue=''
                        key={`${input.name}-${index}`}
                        name={input.name} />
                    )
                  default:
                    return
                }
              })
            }
          </DialogContent>
          <DialogActions>
            <Button autoFocus color='primary'>
              {modalAddCancel}
            </Button>

            <Button autoFocus color='primary' type='submit'>
              {modalAddConfirm}
            </Button>

          </DialogActions>
        </form>
      </Dialog>
    </Container>
  )
}

export default CrudTable
