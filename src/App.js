import React from 'react';
//import Button from '@material-ui/core/Button';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
//import Calendar from './calendar/calendar';
import TransitionsModal from './time-pickers/modal';
//import Jancal from './calendar/gridcal'
//import TransitionsModal from './time-pickers/modal';
//import OutlinedButtons from './calendar/calendar';
import StaticDatePicker from './calendar/datePickerCal'
//import { makeStyles } from '@material-ui/core/styles';
function App() {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <StaticDatePicker />
      <TransitionsModal/>
    </MuiPickersUtilsProvider>
  );
}

export default App;
