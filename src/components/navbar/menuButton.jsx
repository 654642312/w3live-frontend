import React, { Fragment, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListComponent from './list';
import { Drawer, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';


const anchor = 'top'

const useStyles = makeStyles(theme => ({

  menu: {
    marginLeft: -18,
    marginRight: 10,
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  },

  colorMenu: {
    color: '#f5f5f5'
  },


  links: {
    color: 'white',
    textDecoration: 'none'
  }

}));

function MenuButton() {
  const classes = useStyles();

  const [state, setState] = useState(false);

  const toggleDrawer = (anchor, open) => () => {
    setState({ [anchor]: open });
  };


  return (
    <Fragment>
      <div key={anchor}>
        <IconButton className={classes.menu} aria-label="Menu" onClick={toggleDrawer(anchor, true)}>
          <MenuIcon className={classes.colorMenu} />
        </IconButton>
        <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
          <ListComponent
            itemName='Replays'
            route='/replays'
            color='#000'
            className={classes.links}
            onClose={toggleDrawer(anchor, false)}
          />
          <ListComponent
            itemName='News'
            route='/news'
            color='#000'
            className={classes.links}
            onClose={toggleDrawer(anchor, false)}
          />
          <ListComponent
            itemName='About Team Development'
            route='/aboutteam' color='#000'
            className={classes.links}
            onClose={toggleDrawer(anchor, false)}
          />
        </Drawer>
      </div>
    </Fragment>
  );
}

export default MenuButton;