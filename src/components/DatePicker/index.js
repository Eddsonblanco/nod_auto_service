import 'date-fns'
import React from 'react'
import Grid from '@material-ui/core/Grid'
import DateFnsUtils from '@date-io/date-fns'
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from '@material-ui/pickers'

export default function MaterialUIPickers({ labelDate, onChangeDate = () => {}, onChangeTime = () => {} }) {
  // The first commit of Material-UI
  const [ selectedDate, setSelectedDate ] = React.useState(new Date())
  const [ selectedTime, setSelectedTime ] = React.useState(new Date())

  const handleDateChange = (date) => {
    setSelectedDate(date)
    onChangeDate(date)
  }

  const handleTimeChange = data => {
    setSelectedTime(data)
    onChangeTime(data)
  }

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify='space-around' spacing={2}>
        <Grid item xs>
          <KeyboardDatePicker
            disableToolbar
            format='MM/dd/yyyy'
            id={`date-picker-inline${labelDate}`}
            KeyboardButtonProps={{
              'aria-label': 'change date'
            }}
            label={labelDate}
            margin='normal'
            onChange={handleDateChange}
            value={selectedDate}
            variant='inline' />
        </Grid>
        <Grid item xs>

          <KeyboardTimePicker
            id={`timer-${labelDate}`}
            KeyboardButtonProps={{
              'aria-label': 'change time'
            }}
            label=''
            margin='normal'
            onChange={handleTimeChange}
            style={{
              marginTop: 32
            }}
            value={selectedTime} />
        </Grid>
      </Grid>
    </MuiPickersUtilsProvider>
  )
}
