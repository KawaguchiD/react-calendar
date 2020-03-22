import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TransitionsModal from './time-pickers/modal';
//----------------------------------------------------
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    border: 0,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
export default function NestedGrid() {
  const classes = useStyles();
  function FormOne() {
    return (
      <>
        <Grid item xs={1}>
          <Paper className={classes.paper}>1</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>2</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>3</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>4</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>5</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>6</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>7</Paper>
        </Grid>
      </>
    );
  }
  function FormTwo() {
    return (
      <>
        <Grid item xs={1}>
          <Paper className={classes.paper}>8</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>9</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>10</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>11</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>12</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>13</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>14</Paper>
        </Grid>
      </>
    );
  }
  function FormThree() {
    return (
      <>
        <Grid item xs={1}>
          <Paper className={classes.paper}>15</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>16</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>17</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>18</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>19</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>20</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>21</Paper>
        </Grid>
      </>
    );
  }
  function FormFour() {
      return (
        <>
          <Grid item xs={1}>
            <Paper className={classes.paper}>22</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>23</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>24</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>25</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>26</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>27</Paper>
          </Grid>
          <Grid item xs={1}>
            <Paper className={classes.paper}>28</Paper>
          </Grid>
        </>
      );
  }
  function FormFive() {
    return (
      <>
        <Grid item xs={1}>
          <Paper className={classes.paper}>29</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>30</Paper>
        </Grid>
        <Grid item xs={1}>
          <Paper className={classes.paper}>31</Paper>
        </Grid>
      </>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={1}>
          <FormOne onClick={ TransitionsModal } />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormTwo />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormThree />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormFour />
        </Grid>
        <Grid container item xs={12} spacing={1}>
          <FormFive />
        </Grid>
      </Grid>
    </div>
  );
  }
