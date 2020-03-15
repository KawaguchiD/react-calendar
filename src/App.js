import React from 'react';
import Button from '@material-ui/core/Button';
//import calendar from './calendar/caledar';
//import modal from './time-pickers/modal';
import TransitionsModal from './time-pickers/modal';
function App() {
  return (
    <>
    <Button variant="contained" color="primary">
        Hello World
    </Button>
    <TransitionsModal />
    </>
  );
}

export default App;
