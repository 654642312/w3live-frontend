import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import { Twitter, Instagram, GitHub } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        textAlign: 'center',
        padding: '1rem',
        boxShadow: '2px 2px 2px 2px rgba(0, 0, 0, 0.2)',
        borderRadius: '10px',
        marginTop: '3rem',
    },

    image: {
        width: '80%'
    },

    iconSize: {
        fontSize: '1.5rem',
        marginRight: '1rem'
    }

    
});

const CardAbout = ({ image, children, name }) => {

    const classes = useStyles();

    return (
        <Grid container spacing={6} className={classes.root}>
            <Grid item xs={12}>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    component='h1'
                    gutterBottom={true}
                    align='center'
                >
                    {name}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
                <img src={image} alt="avatar del desarrollador" className={classes.image} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography
                    variant='body2'
                    color='textSecondary'
                    component='p'
                    gutterBottom={true}
                    align='center'
                >
                    {children}
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Twitter className={ classes.iconSize } />
                <Instagram className={ classes.iconSize } />
                <GitHub className={ classes.iconSize } />
            </Grid>
        </Grid>
    );
}

export default CardAbout;