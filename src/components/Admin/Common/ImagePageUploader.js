import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { BottomToolbar, ImageUpload } from '@react-page/ui'
import * as React from 'react'
// import { ImageControlsProps } from '../types/controls'

const ImageDefaultControls = props => {
  const {
    Renderer,
    handleImageLoaded,
    handleImageUploaded,
    handleChange,
    readOnly,
    focused,
    remove
  } = props

  return (
    <div>
      <Renderer {...props} imagePreview={props.imagePreview} />
      {!readOnly && focused && (
        <BottomToolbar
          icon={props.IconComponent}
          onDelete={remove}
          open={props.focused}
          title={props.translations.pluginName}
          {...props}>
          <div style={{ display: 'flex' }}>
            {props.imageUpload && (
              <React.Fragment>
                <ImageUpload
                  imageLoaded={handleImageLoaded}
                  imageUpload={props.imageUpload}
                  imageUploaded={handleImageUploaded}
                  translations={props.translations} />
                <Typography
                  style={{ marginLeft: '20px', marginRight: '20px' }}
                  variant='body1'>
                  {props.translations.or}
                </Typography>
              </React.Fragment>
            )}
            <TextField
              label={
                props.imageUpload ?
                  props.translations.haveUrl :
                  props.translations.imageUrl
              }
              name='src'
              onChange={handleChange}
              // style={{ flex: 1 }}
              placeholder={props.translations.srcPlaceholder}
              value={props.state.src} />
          </div>
          <TextField
            label={props.translations.hrefLabel}
            name='href'
            onChange={handleChange}
            placeholder={props.translations.hrefPlaceholder}
            style={{ width: '512px' }}
            value={props.state.href} />
          <br />
          <br />
          <FormControlLabel
            control={
              <Checkbox
                checked={props.state.target === '_blank'}
                name='target'
                onChange={handleChange} />
            }
            label={props.translations.openNewWindow} />
        </BottomToolbar>
      )}
    </div>
  )
}

export default ImageDefaultControls
