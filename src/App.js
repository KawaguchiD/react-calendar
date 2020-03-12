import React from 'react';
import Button from '@material-ui/core/Button';
import BasicTextFields from './time-pickers/TextFields';
import MaterialUIPickers from './calendar/caledar';
function App() {
  return (
    <>
    <Button variant="contained" color="primary">
        Hello World
    </Button>
    <BasicTextFields />
    <MaterialUIPickers />
    </>
  );
}

export default App;
