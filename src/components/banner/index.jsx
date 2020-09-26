import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    banner: {
        backgroundImage: 'url(https://www.mmoingame.com/wp-content/uploads/2018/11/Warcraft-III-Reforged.jpg)',
        height: '600px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
            height: 300,
            fontSize: "3em"
        },
        zIndex: theme.zIndex.drawer + 1,
    }
}))

const Banner = () => {

    const classes = useStyles();

    return (
        <div className={classes.banner}></div>
    );
}

export default Banner;