import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        marginTop: '20rem',
        background: '#444',
        position: 'absolute',
        left: 0,
        bottom: 0,
        width: '100%',
        padding: '2rem 0',
    },
    color: {
        color: '#fff'
    }
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={ classes.root } >
            <Typography
                className={ classes.color }
                variant='body2'
                color='secondary'
                component='p'
                gutterBottom={true}
                align='center'>
                Copyright © 2020 | W3LIVE
            </Typography>
        </div>
    )
}

export default Footer;