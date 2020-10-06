import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import ListComponent from './list'
import MenuButton from './menuButton'
import { Link } from 'react-router-dom';

import { ContextConsumer } from '../../state/context'

const useStyles = makeStyles(theme => ({
    title: {
        color: 'white',
        textDecoration: 'none',
        flexGrow: 1,
    },

    link: {
        color: 'white',
        textDecoration: 'none'
    },

    offset: theme.mixins.toolbar,

    listRight: {
        display: 'flex',
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    }
}));

const NavBar = () => {

    const classes = useStyles()

    return (
        <Fragment>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <ContextConsumer>
                     {
                        value => (
                            <MenuButton toggleDrawer={ value.toggleDrawer } state={ value.drawer }/>
                        )
                     }
                    </ContextConsumer>
                    <Link to='/' className={classes.title} >
                     <Button varient="h6" color="inherit">
                        W3Live
                     </Button>
                    </Link>
                    <Hidden xsDown className={classes.listRight}>
                        <ListComponent itemName='News' route='/news' color='#f5f5f5' className={ classes.link } />
                        <ListComponent itemName='Replays' route='/replays' color='#f5f5f5' className={ classes.link }/>
                        <ListComponent itemName='About Team Development' route='/aboutteam' color='#f5f5f5' className={ classes.link } />
                    </Hidden>
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </Fragment>
    );
}

export default NavBar;
