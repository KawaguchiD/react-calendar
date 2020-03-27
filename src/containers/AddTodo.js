import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../actions';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

let AddTodo = ({dispatch}) => {
  let input;

  return (
    <div>
       <form noValidate autoComplete="off">
      <TextField id="standard-basic" label="Todo" inputRef={node => { input = node }}/>
    </form>
      <Button variant="contained" color="primary"
        onClick={() => {
          dispatch(addTodo(input.value));
          input.value = '';
        }}>
        Add Todo
      </Button>
    </div>
  );
};

AddTodo = connect()(AddTodo);

export default AddTodo;