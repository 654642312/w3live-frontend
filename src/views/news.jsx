import React from 'react';
import CardComponent from '../components/card';
import banner from '../images/banner.jpg';
import { Container, Grid, Typography } from '@material-ui/core';

const News = () => {
  return (
    <Container maxWidth='md'>
      <Typography variant='h2' align='center' component='h1' gutterBottom={true}>
          News
      </Typography>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title='Standart orc play'
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis sapiente, sed voluptate ex et ad, sit facilis similique harum quis architecto? Eligendi praesentium perspiciatis soluta numquam minima incidunt tenetur!'
            image={banner}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title='Standart orc play'
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis sapiente, sed voluptate ex et ad, sit facilis similique harum quis architecto? Eligendi praesentium perspiciatis soluta numquam minima incidunt tenetur!'
            image={banner}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <CardComponent
            title='Standart orc play'
            text='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam veritatis sapiente, sed voluptate ex et ad, sit facilis similique harum quis architecto? Eligendi praesentium perspiciatis soluta numquam minima incidunt tenetur!'
            image={banner}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default News;
