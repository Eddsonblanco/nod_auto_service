import React from 'react'

import { makeStyles } from '@material-ui/core/styles'

import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  TableRow,
  Button,
  Typography,
  TableSortLabel,
  Checkbox
} from '@material-ui/core'

import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

import ContainerAdmin from 'components/Admin/Common/ContainerAdmin'

const styles = makeStyles(theme => ({
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

const Settings = (props) => {
  const {
    rows = [
      {
        _id  : 1,
        image: 'https://images.vexels.com/media/users/3/114293/preview2/a2eb58540188d0a21b4eda53253624d0-vector-libre-lindo-icono-de-google-chrome.jpg',
        name : 'prueba'
      },
      {
        _id  : 2,
        image: '',
        name : 'prueba 1'
      },
      {
        _id  : 3,
        image: '',
        name : 'prueba 2'
      }
    ],
    columns = [
      {
        _id     : 1,
        align   : 'left',
        key     : 'image',
        label   : 'Image',
        minWidth: '200px',
        ordering: 1,
        type    : 'image',
        visible : true
      },
      {
        _id     : 2,
        align   : 'left',
        key     : 'name',
        label   : 'Name',
        minWidth: '200px',
        ordering: 2,
        type    : 'text',
        visible : true
      }
    ],
    sortTable = {},
    withOrder = false,
    withCheckbox = false,
    withMenuColumns = false,
    withEdit = true,
    withRemove = true,
    withView = true,
    withActions = true,
    omView = () => {},
    onEdit = () => { },
    onRemove = () => { }
  } = props
  const classes = styles()

  const visibleColumns = columns.filter(({ visible = true }) => visible)
  const { orderBy = '', sort = 'asc' } = sortTable

  const onHandleSelectAll = () => {}

  return (
    <ContainerAdmin
      actionSave={
        <Button color='secondary' variant='contained'>Save</Button>
      }
      title='Settings'>
      <Grid container>
        <Grid item xs>
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
                      <TableCell align='left'>
                        {
                          withView && <RemoveRedEyeIcon onClick={() => omView(_id)} />
                        }
                        {
                          withEdit && <EditIcon onClick={() => onEdit(_id)} />
                        }
                        {
                          withRemove && <DeleteIcon onClick={() => onRemove(_id)} />
                        }
                        {withMenuColumns ? (<TableCell />) : null}
                      </TableCell>
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
        </Grid>
      </Grid>
    </ContainerAdmin>

  )
}

export default Settings
