import React from 'react';
import { Grid, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    textAlign: 'center',
    marginTop: '1rem',
    padding: '1rem',
    boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
    '&:hover': {
      transform: 'scale(1.1)',
      background: '#D3D3D3',
      transition: 'ease 0.5s'
    },
    borderRadius: '10px',
    cursor: 'pointer',
  },

  item: {
    marginTop: '1rem',
  }
});

const ReplaysComponent = ({ date, mode, duration, type, teamOne, teamTwo }) => {
  const classes = useStyles();

  return (
    <Container data-aos='flip-left'>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={2} md={2} className={ classes.item } >
          {date}
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={ classes.item } >
          {duration}
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={ classes.item }>
          {mode}
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={ classes.item }>
          {type}
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={ classes.item }>
          {teamOne} vs {teamTwo}
        </Grid>
        <Grid item xs={12} sm={2} md={2} className={ classes.item }>
          Donwload
        </Grid>
      </Grid>
    </Container>
  );
};

export default ReplaysComponent;
