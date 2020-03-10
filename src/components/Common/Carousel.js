import React, { PureComponent } from 'react'

import Slider from 'react-slick'
import {
  Fab,
  Tooltip
} from '@material-ui/core'

import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'

import { withStyles } from '@material-ui/styles'

const ArrowSlider = ({ type, styles, className, onClick }) => (
  <Tooltip aria-label={type === 'prev' ? 'Atrás' : 'Siguiente'} title={type === 'prev' ? 'Atrás' : 'Siguiente'}>
    <>
      <Fab
        className={`${className} ${styles}`}
        onClick={onClick}
        size='small' >
        {
          type === 'prev' ?
            <KeyboardArrowLeftIcon /> :
            <KeyboardArrowRightIcon />
        }
      </Fab>
    </>
  </Tooltip>
)

// let marginInitialCarousel = '-250px'
class Carousel extends PureComponent {
  state = {
    isClient: false
  };

  componentDidMount() {
    this.setState({ isClient: true })
  }

  render() {
    const {
      classes,
      children,
      settings: {
        responsive,
        // marginInitial,
        ...settings
      }
    } = this.props
    // marginInitialCarousel = marginInitial

    const { isClient } = this.state

    return (
      <div
        className={classes.root}>
        <Slider
          key={isClient ? 'client' : 'server'}
          nextArrow={<ArrowSlider styles={classes.arrowButton} type='next' />}
          prevArrow={<ArrowSlider styles={classes.arrowButton} type='prev' />}
          responsive={isClient ? responsive : null}
          {...settings}>
          {children}
        </Slider>
      </div>
    )
  }
}

const styles = ({
  palette: {
    secondary: {
      main: secondary
    },
    getContrastText
  },
  spacing
}) => ({
  arrowButton: {
    '&:hover': {
      background: secondary,
      color     : getContrastText(secondary)
    },
    background: 'white',
    boxShadow : '0 2px 5px 0 rgba(0,0,0,0.05)',
    color     : secondary
  },
  root: {
    '& .slick-arrow': {
      '&.slick-hidden': {
        display: 'none'
      },
      '&.slick-next': {

      },
      '&.slick-prev': {
        right: 60
        // [breakpoints.down('sm')]: {
        //   // right: 'calc(50% + 50px)'
        //   right: 'calc(50% + 10px)'
        // }
      },
      // [breakpoints.down('sm')]: {
      //   right: 'calc(50% - 50px)'
      // },
      bottom  : 0,
      position: 'absolute',
      right   : 0,
      zIndex  : 1
    },
    '& .slick-initialized': {
      '& .slick-slide': {
        display: 'block',
        margin : spacing(1, 0)
      }
    },
    '& .slick-list': {
      '&.dragging': {
        cursor: 'pointer'
      },
      '&:focus': {
        outline: 'none'
      },
      display : 'block',
      margin  : 0,
      overflow: 'hidden',
      padding : 0,
      position: 'relative'
    },
    '& .slick-loading': {
      '& .slick-slide': {
        visibility: 'hidden'
      },
      '& .slick-track': {
        visibility: 'hidden'
      }
    },
    '& .slick-slide': {
      '& > div': {
        display      : 'flex',
        flexDirection: 'column',
        padding      : 8
      },
      // '& > div > div': {
      //   padding: 8
      // },
      '& div': {
        outline: 'none'
      },
      '& img': {
        display: 'block'
      },
      '&.slick-active[data-index="0"]': {
        display: 'block',
        width  : '100%'
      },
      '&.slick-loading img': {
        display: 'none'
      },
      '&.slick-slide.dragging img': {
        pointerEvents: 'none'
      },
      display  : 'none',
      'float'  : 'left',
      height   : '100%',
      minHeight: 1
    },
    '& .slick-slider': {
      // '-webkit-tap-highlight-color': 'transparent',
      '& .slick-track, & .slick-list': {
        transform: 'translate3d(0, 0, 0)'
      },
      boxSizing    : 'border-box',
      display      : 'block',
      paddingBottom: spacing(6),
      position     : 'relative',
      touchAction  : 'pan-y',
      userSelect   : 'none'
    },
    '& .slick-track': {
      '&::after': {
        clear: 'both'
      },
      '&::after, &::before': {
        content: "''",
        display: 'table'
      },
      display : 'block',
      left    : 0,
      // marginLeft: marginInitialCarousel,
      position: 'relative',
      top     : 0
    },
    '& .slick-vertical': {
      '& .slick-slide': {
        border : '1px solid transparent',
        display: 'block',
        height : 'auto'
      }
    }
  }
})

export default withStyles(styles)(Carousel)
