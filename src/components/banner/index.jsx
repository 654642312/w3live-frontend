import React from 'react';
import banner from '../../images/banner.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundImage: `url(${banner})`,
        height: '500px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        },
        zIndex: theme.zIndex.drawer + 1,
        marginBottom: '3rem'
    }
}))

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}></div>
    );
}

export default Banner;