import React from 'react';
import { Grid, Container, Typography } from '@material-ui/core';
import Banner from '../components/banner';
import CardComponent from '../components/card';
import banner from '../images/banner.jpg';
import ReplaysComponent from '../components/replays';

const HomePage = () => {

  return (
    <div>
      <Banner />
      <Container maxWidth='md'>
        <Typography
          variant='h5'
          align='center'
          component='h2'
          gutterBottom={true}
        >
          ¿Que es W3Live?
        </Typography>
        <Typography
          variant='body2'
          color='textSecondary'
          component='p'
          gutterBottom={true}
          align='center'
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          commodi cumque repudiandae suscipit ipsum repellendus odit sit ullam
          molestias, fugit quisquam natus quam provident rerum aliquam minima ab
          inventore nam at adipisci mollitia officiis laboriosam iusto
          voluptatem! Corrupti assumenda inventore debitis repellat neque
          reprehenderit ab rerum, doloribus beatae blanditiis, sed vel, ullam
          illo minus temporibus tempore magnam maiores quidem accusantium.
        </Typography>
        <Typography variant='h5' align='center' component='h2'>
          Most Popular News
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
        <Typography
          variant='h5'
          align='center'
          component='h2'
          gutterBottom={true}
        >
          Most Popular Replays
        </Typography>
        <ReplaysComponent
          date='12.02.20'
          duration='20:00'
          mode='1v1'
          type='w3g'
          teamTwo='Edgar018'
          teamOne='Lyn'
        />
        <ReplaysComponent
          date='12.02.20'
          duration='20:00'
          mode='1v1'
          type='w3g'
          teamTwo='Edgar018'
          teamOne='Lyn'
        />
        <ReplaysComponent
          date='12.02.20'
          duration='20:00'
          mode='1v1'
          type='w3g'
          teamTwo='Edgar018'
          teamOne='Lyn'
        />
      </Container>
    </div>
  );
};

export default HomePage;
