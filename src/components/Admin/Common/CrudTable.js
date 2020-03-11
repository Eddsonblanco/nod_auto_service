import React from 'react'

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
      title: titleModalAdd = 'New'
    }
  } = props
  const classes = styles()

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
        <DialogContent>
          {
            modalAddForm.map((input, index) => {
              switch (input.type) {
                case 'image':

                  return (
                    <InputImage
                      key={`${input.key}-${index}`} />
                  )
                case 'text':

                  return (
                    <TextField
                      autoFocus
                      fullWidth
                      id='name'
                      key={`${input.key}-${index}`}
                      label={input.label}
                      margin='dense'
                      type='email' />
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
          <Button autoFocus color='primary'>
            {modalAddConfirm}
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}

export default CrudTable
