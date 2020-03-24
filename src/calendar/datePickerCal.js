import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
//import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
//import { orange } from '@material-ui/core/colors';
//import TransitionsModal from './time-pickers/modal'
const useStyles = makeStyles({
  root: {
    colors: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    //border: 0,
  },
});

const StaticDatePicker = () => {
  const [date, changeDate] = useState(new Date());
  const classes = useStyles();
  // prettier-ignore

  const handleChange = date => {
    changeDate(date)
    hoge()
  }

  function hoge() {
    console.log('heelo')
  }
  return (
    <>
      <DatePicker
        autoOk
        variant="static"
        openTo="year"
        value={date}
        onChange={handleChange}
      />
    </>
  );
};

export default StaticDatePicker;
