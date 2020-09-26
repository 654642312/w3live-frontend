import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem } from '@material-ui/core';

import { Link } from 'react-router-dom'

const ListComponent = ({ itemName, route, color, toggleDrawer}) => {

    const useStyles = makeStyles(theme => ({
        link: {
            color: color,
            textDecoration: 'none'
        },
    }))

    const classes = useStyles();

    return (
        <List component='ul'>
            <ListItem button>
                <Link to={route} className={ classes.link } onClick={() => toggleDrawer('top', false)}>
                  {itemName}
                </Link>
            </ListItem>
        </List>
    )
}

export default ListComponent