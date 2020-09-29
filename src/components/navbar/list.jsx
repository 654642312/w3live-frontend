import React from 'react';

import { makeStyles } from '@material-ui/core/styles'
import { List, ListItem, ListItemText } from '@material-ui/core';

import { Link } from 'react-router-dom'

const ListComponent = ({ itemName, route, color, onClose}) => {

    const useStyles = makeStyles(theme => ({
        link: {
            color: color,
            textDecoration: 'none'
        },
    }))

    const classes = useStyles();

    return (
        <List component='ul'>
            <Link to={route} className={ classes.link } onClick={() =>onClose ? onClose() : ''}>
             <ListItem button>
                 <ListItemText primary={itemName}>
                 </ListItemText>
             </ListItem>
            </Link>
        </List>
    )
}

export default ListComponent