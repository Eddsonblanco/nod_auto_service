import React, { Component } from 'react'

export default class Loading extends Component {
  render() {
    return (
      <div
        style={{
          alignItems    : 'center',
          bottom        : 0,
          display       : 'flex',
          justifyContent: 'center',
          left          : 0,
          position      : 'absolute',
          right         : 0,
          top           : 0
        }}>
        Cargando...
      </div>
    )
  }
}
