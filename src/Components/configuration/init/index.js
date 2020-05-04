import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '14px'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export const Configuration =  () => {
  const classes = useStyles();
  const [fleet, setFleet] = React.useState('');

  const handleChange = (event) => {
    setFleet(event.target.value);
  };

  return (
    <Container className={classes.root} maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          Modulo de administración
        </Grid>
        <Grid item xs={12}>

          <span>Flota</span>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={fleet}
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>



        </Grid>
        
      </Grid>
    </Container>
  );
}