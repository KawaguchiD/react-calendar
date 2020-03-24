import React from 'react';
//import Button from '@material-ui/core/Button';
//import Calendar from './calendar/calendar';
//import modal from './time-pickers/modal';
//import Jancal from './calendar/gridcal'
//import TransitionsModal from './time-pickers/modal';
import OutlinedButtons from './calendar/calendar';
import StaticDatePicker from './calendar/datePickerCal'
//import { makeStyles } from '@material-ui/core/styles';
function App() {
  return (
    <>
    {/* <TransitionsModal /> */}
    <OutlinedButtons />
    <StaticDatePicker />
    </>
  );
}

export default App;
