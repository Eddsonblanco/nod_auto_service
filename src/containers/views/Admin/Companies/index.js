import React, { useEffect  } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles'

import companiesDucks from 'reducers/companies'
import CrudTable from 'components/Admin/Common/CrudTable'

const {
  getCompanies,
  removeCompany,
  createCompany
} = companiesDucks.creators

// const styles = makeStyles(theme => ({
//   actionIcon: {
//     '&:hover': {
//       color : theme.palette.grey[600],
//       cursor: 'pointer'
//     },
//     color      : theme.palette.grey[400],
//     fontSize   : '1.125rem',
//     marginRight: theme.spacing(1)
//   },
//   buttonFooter: {
//     fontSize: 12,
//     width   : '100px'
//   },
//   container: {
//     flex    : 1,
//     overflow: 'auto'
//   },
//   containerHeaderTable: {
//     padding: theme.spacing(2)
//   },
//   containerSearch: {
//     display       : 'flex',
//     justifyContent: 'space-between'
//   },
//   containerTable: {
//     display      : 'flex',
//     flexDirection: 'column',
//     height       : '100%',
//     overflow     : 'hidden',
//     width        : '100%'
//   },
//   customBottomAdd: {
//     border       : 'dashed 1px',
//     margin       : '2px 10px',
//     textTransform: 'initial'
//   },
//   customCheckbox: {
//     '& svg': {
//       height: 18,
//       width : 18
//     }
//   },
//   customMenuHead: {
//     padding: theme.spacing(2)
//   },
//   customMenuHeadTitle: {
//     color       : theme.palette.grey[800],
//     fontWeight  : 'bold',
//     marginBottom: 12
//   },
//   disableText: {
//   },
//   editableCell: {
//     display: 'flex'
//   },
//   flexEnd: {
//     justifyContent: 'flex-end'
//   },
//   headerTable: {
//     fontWeight: 'bold'
//   },
//   iconAdd: {
//     '&:nth-last-child(1)': {
//       marginLeft: theme.spacing(1)
//     },
//     cursor  : 'pointer',
//     fontSize: 18
//   },
//   imageContent: {
//     '& > img': {
//       height: 'auto',
//       width : '100%'
//     },
//     maxWidth: 50
//   },
//   inputSearch: {
//     '& * input': {
//       fontSize: 14,
//       padding : '12px 10px !important'
//     },
//     '& > div': {
//       padding: '0 14px 0 0 !important'
//     },
//     margin: '2px 0'
//   },
//   menuItem: {
//     fontSize: 14
//   },
//   optionSelect: {
//     fontSize: 14
//   },
//   searchIcon: {
//     cursor: 'pointer'
//   },
//   spaceBetween: {
//     alignItems    : 'center',
//     display       : 'flex',
//     justifyContent: 'space-between'
//   },
//   stickyHeader: {
//     left: 'inherit'
//   },
//   tableHead: {
//     backgroundColor: theme.palette.grey[100]
//   },
//   textAmount: {
//     '&$disableText': {
//       color: theme.palette.grey[500]
//     },
//     color     : theme.palette.primary.main,
//     fontWeight: 'bold'
//   },
//   textTotal: {
//     fontWeight : 'bold',
//     lineHeight : '20px',
//     marginRight: 5
//   },
//   titleTable: {
//     fontWeight: 'bold'
//   }
// }))

const Companies = () => {
  const dispatch = useDispatch()

  const {
    status,
    columns,
    rows,
    pagination
  } = useSelector(state => state.companies)

  // const classes = styles()

  useEffect(() => {
    if(status === 'NEW')
      dispatch(getCompanies())
  }, [])

  const _handleClickRemove = id => {
    dispatch(removeCompany(id))
  }

  const _handleClickCreate = data => {
    dispatch(createCompany(data))
  }

  return (
    <CrudTable
      btnAdd='New Company'
      modalAdd={{
        cancel : 'Cancel',
        confirm: 'Confirm',
        form   : [
          {
            label: 'Image',
            name : 'image',
            type : 'image'
          },
          {
            label: 'Alt text',
            name : 'alt_text',
            type : 'text'
          }
        ],
        onConfirm: _handleClickCreate,
        title    : 'New Company'
      }}
      table={{
        columns,
        modalRemoveMessage: {
          cancel : 'Cancel',
          confirm: 'Confirm',
          title  : 'Are you sure?'
        },
        onRemove: _handleClickRemove,
        pagination,
        rows
      }}
      title='Companies List' />
  )
}

export default Companies
