import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Typography,
  TableSortLabel,
  Checkbox,
  Dialog,
  DialogTitle,
  Slide,
  DialogActions,
  Button
} from '@material-ui/core'

import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})

const styles = makeStyles(theme => ({
  actionIcon: {
    '&:hover': {
      color : theme.palette.grey[600],
      cursor: 'pointer'
    },
    color      : theme.palette.grey[400],
    fontSize   : '1.125rem',
    marginRight: theme.spacing(1)
  },
  buttonFooter: {
    fontSize: 12,
    width   : '100px'
  },
  container: {
    flex    : 1,
    overflow: 'auto'
  },
  containerHeaderTable: {
    padding: theme.spacing(2)
  },
  containerSearch: {
    display       : 'flex',
    justifyContent: 'space-between'
  },
  containerTable: {
    display      : 'flex',
    flexDirection: 'column',
    height       : '100%',
    overflow     : 'hidden',
    width        : '100%'
  },
  customBottomAdd: {
    border       : 'dashed 1px',
    margin       : '2px 10px',
    textTransform: 'initial'
  },
  customCheckbox: {
    '& svg': {
      height: 18,
      width : 18
    }
  },
  customMenuHead: {
    padding: theme.spacing(2)
  },
  customMenuHeadTitle: {
    color       : theme.palette.grey[800],
    fontWeight  : 'bold',
    marginBottom: 12
  },
  disableText: {
  },
  editableCell: {
    display: 'flex'
  },
  flexEnd: {
    justifyContent: 'flex-end'
  },
  headerTable: {
    fontWeight: 'bold'
  },
  iconAdd: {
    '&:nth-last-child(1)': {
      marginLeft: theme.spacing(1)
    },
    cursor  : 'pointer',
    fontSize: 18
  },
  imageContent: {
    '& > img': {
      height: 'auto',
      width : '100%'
    },
    maxWidth: 50
  },
  inputSearch: {
    '& * input': {
      fontSize: 14,
      padding : '12px 10px !important'
    },
    '& > div': {
      padding: '0 14px 0 0 !important'
    },
    margin: '2px 0'
  },
  menuItem: {
    fontSize: 14
  },
  optionSelect: {
    fontSize: 14
  },
  searchIcon: {
    cursor: 'pointer'
  },
  spaceBetween: {
    alignItems    : 'center',
    display       : 'flex',
    justifyContent: 'space-between'
  },
  stickyHeader: {
    left: 'inherit'
  },
  tableHead: {
    backgroundColor: theme.palette.grey[100]
  },
  textAmount: {
    '&$disableText': {
      color: theme.palette.grey[500]
    },
    color     : theme.palette.primary.main,
    fontWeight: 'bold'
  },
  textTotal: {
    fontWeight : 'bold',
    lineHeight : '20px',
    marginRight: 5
  },
  titleTable: {
    fontWeight: 'bold'
  }
}))

export default (props) => {
  const {
    rows = [],
    columns = [
      // {
      //   _id     : 1,
      //   align   : 'left',
      //   key     : 'image',
      //   label   : 'Image',
      //   minWidth: '200px',
      //   ordering: 1,
      //   type    : 'image',
      //   visible : true
      // },
    ],
    sortTable = {},
    withOrder = false,
    withCheckbox = false,
    withMenuColumns = false,
    withEdit = false,
    withRemove = false,
    withView = false,
    withActions = false,
    omView = () => { },
    onEdit = () => { },
    onRemove = () => { }
  } = props
  const classes = styles()

  const [ openAlert, setOpenAlert ] = useState(false)
  const [ currentId, setCurrentId ] = useState(null)

  const visibleColumns = columns.filter(({ visible = true }) => visible)
  const { orderBy = '', sort = 'asc' } = sortTable

  const onHandleSelectAll = () => { }

  const _handleClickRemove = id => {
    if(!openAlert)
      setCurrentId(id)
    else
      setCurrentId(null)

    setOpenAlert(!openAlert)
  }

  return (
    <>
      <TableContainer>
        <Table aria-label='simple table' className={classes.table}>
          <TableHead>
            <TableRow>

              {withCheckbox ? (
                <TableCell padding='checkbox'>
                  <Checkbox
                    color='primary'
                    inputProps={{ 'aria-label': 'select all desserts' }}
                    onChange={(e) => onHandleSelectAll(e.target.checked)} />
                </TableCell>
              ) : null}

              {visibleColumns.map(({ key, align, minWidth, label, ordering }) => (
                <TableCell
                  align={align}
                  classes={{
                    stickyHeader: classes.stickyHeader
                  }}
                  key={key}
                  sortDirection={orderBy === key ? sort : false}
                  style={{ minWidth }}>
                  {withOrder && ordering ? (
                    <TableSortLabel
                      active={orderBy === key}
                      direction={orderBy === key ? sort : 'asc'}
                      onClick={() => _handleSortTable(key, sortTable)}>
                      <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                    </TableSortLabel>
                  ) : (
                    <Typography className={classes.headerTable} variant='body1'>{label}</Typography>
                  )}
                </TableCell>
              ))}

              {
                withActions && <TableCell>Actions</TableCell>
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? rows.map((row, index) => {
              const { _id, selected = false, disabled = false } = row

              return (
                <TableRow
                  hover key={index}>

                  {withCheckbox ? (
                    <TableCell padding='checkbox'>
                      <Checkbox
                        checked={selected}
                        color='primary'
                        disabled={disabled}
                        onClick={(e) => _handleClickSelectItem(e, _id)} />
                    </TableCell>
                  ) : null}

                  {visibleColumns.map(({ key, align, type }) => {
                    switch (type) {
                      case 'image':
                        return (
                          <TableCell align={align || 'left'} key={key}>
                            <div className={classes.imageContent}>
                              <img src={row[key]} />
                            </div>
                          </TableCell>
                        )

                      default:
                        return (
                          <TableCell align={align || 'left'} key={key}>
                            <Typography className={classes.bodyTable} variant='body1'>
                              {Array.isArray(row[key]) ? (row[key].join(', ')) : row[key]}
                            </Typography>
                          </TableCell>
                        )
                    }
                  })}

                  {
                    withActions &&
                  <TableCell align='left'>
                    {
                      withView && <RemoveRedEyeIcon className={classes.actionIcon} onClick={() => omView(_id)} />
                    }
                    {
                      withEdit && <EditIcon className={classes.actionIcon} onClick={() => onEdit(_id)} />
                    }
                    {
                      withRemove && <DeleteIcon className={classes.actionIcon} onClick={() => _handleClickRemove(_id)} />
                    }
                    {withMenuColumns ? (<TableCell />) : null}
                  </TableCell>
                  }
                </TableRow>
              )
            }) : (
              <TableRow>
                <TableCell colSpan={visibleColumns.length} >
                  <Typography align='center'>No hay registros para mostrar</Typography>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog
        keepMounted
        onClose={_handleClickRemove}
        open={openAlert}
        TransitionComponent={Transition}>
        <DialogTitle id='alert-dialog-slide-title'>
          Are you sure?
        </DialogTitle>

        <DialogActions>
          <Button color='primary' onClick={_handleClickRemove} variant='text'>
            Cancel
          </Button>
          <Button
            color='primary' onClick={() => {
              onRemove(currentId)
              _handleClickRemove()
            }} variant='contained'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}
