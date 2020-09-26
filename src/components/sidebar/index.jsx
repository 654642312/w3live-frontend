import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';



const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    drawer: {
        width: 240,
        overflow: 'auto',
    },
    drawerPaper: {
        width: 240
    },
    toolbar: theme.mixins.toolbar,
}));

const SideBar = () => {

    const classes = useStyles();

    return (
        <div >
            <Drawer className={classes.drawer} variant='permanent' classes={{ paper: classes.drawerPaper }} anchor='right'>
                <div className={classes.toolbar}>

                </div>
            </Drawer>
        </div>
    );
}

export default SideBar

