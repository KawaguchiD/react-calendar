import React, { useState } from "react";
import { DatePicker } from "@material-ui/pickers";
//import TransitionsModal from './time-pickers/modal'
import Fade from '@material-ui/core/Fade';
//import TimePickers from './time-pickers/timePicker';
//import BasicTextFields from './time-pickers/TodoTextFields';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))


const StaticDatePicker = () => {
  const classes = useStyles()
  const [date, changeDate] = useState(new Date());
  // prettier-ignore
  const [open, setOpen] = useState(false)

  const handleChange = date => {
    changeDate(date)
    handleOpen()
  }
  const handleOpen = () => {
    setOpen(true)
    console.log('ok')
  }
  const handleClose = () => {
    setOpen(false)
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
{/*-----------------------------------------------------------------------------*/}
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        {/* モーダルの内容 */}
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transition-group animates me.</p>
            {/* <BasicTextFields />
            <TimePickers /> */}
          </div>
        </Fade>
      </Modal>
    </>
  )
};

export default StaticDatePicker;
