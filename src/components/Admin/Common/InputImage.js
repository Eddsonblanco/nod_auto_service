import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'

const styles = makeStyles(theme => ({
  btn: {
    '&:hover': {
      opacity: '.7'
    },
    backgroundColor: theme.palette.primary.light,
    color          : theme.palette.common.white,
    cursor         : 'pointer',
    padding        : '10px 20px',
    transition     : 'opacity .2s ease-in'
  },
  containerInput: {
    alignItems    : 'center',
    border        : `solid 1px ${theme.palette.grey[400]}`,
    display       : 'flex',
    justifyContent: 'space-between',
    position      : 'relative'
  },
  containerPreview: {
    '& > img': {
      height: 'auto',
      width : '100%'
    },
    padding: 50
  },
  input: {
    cursor  : 'pointer',
    fontSize: 0,
    height  : '100%',
    left    : 0,
    opacity : 0,
    position: 'absolute',
    top     : 0,
    width   : '100%'
  },
  label: {
    padding: '10px 20px'
  }
}))

const InputImage = () => {
  const classes = styles()

  const [ currentImage, setCurentImage ] = useState(null)

  const _handleChangeImage = ev => {
    setCurentImage(URL.createObjectURL(ev.target.files[0]))
  }

  return (
    <div>
      <div className={classes.containerInput}>
        <label className={classes.label}>Choose File..</label>
        <div className={classes.btn}>Browse</div>
        <input className={classes.input} onChange={_handleChangeImage} type='file' />
      </div>
      {currentImage &&
      <div className={classes.containerPreview}>
        <img src={currentImage} />
      </div>
      }
    </div>
  )
}

export default InputImage
