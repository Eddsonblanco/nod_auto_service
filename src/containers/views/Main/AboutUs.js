import React from 'react'

import { makeStyles } from '@material-ui/styles'
import {
  Container,
  Typography
} from '@material-ui/core'

const useStyles = makeStyles({

})

export default function AboutUs() {
  const classes = useStyles()

  return (
    <Container>
      <div className={classes.wrapper}>
        <div>
          <Typography>About us</Typography>
          <Typography>
            Efficiently provide access to one-to-one "outside
             the box" thinking after corporate e-business.
             Globally maintain world-class alignments via
              client-centered action items. Synergistically
               engineer proactive technology and ethical niches. Enthusiastically evolve.
          </Typography>

          <div>
            <span></span>
            <Typography>Our story</Typography>
          </div>

          <div>
            <span></span>
            <img src='https://cdn.zeplin.io/5e90fee92fd59f20f20f6614/assets/CBA2194B-73EF-485C-B5E6-A0AA9894B616.png' />
          </div>
        </div>
        <div>
          <div>
            <span>
            </span>
            <img src='https://cdn.zeplin.io/5e90fee92fd59f20f20f6614/assets/87C10837-71A7-4E14-8C37-1CEFF4297BB5.png' />
          </div>
        </div>
      </div>

      <div>

      </div>
    </Container>
  )
}
