import React, { Fragment } from 'react';
import ReplaysComponent from '../components/replays';
import { Typography, Container } from '@material-ui/core';

const Replays = () => {
    return(
        <Container maxWidth='md'>
            <Typography variant='h2' align='center' component='h1' gutterBottom={true}>
                Replays
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
    );
}

export default Replays;