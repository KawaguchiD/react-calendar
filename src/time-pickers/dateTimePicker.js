import React from 'react';

const dateTimePicker = () => {
    return(
    <form className={classes.container} noValidate>
        <TextField
        id="datetime-local"
        label="Next appointment"
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
        shrink: true,
        }}
        />
    </form>
    )
}

export default dateTimePicker;