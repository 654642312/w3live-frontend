import React, { createContext, useState } from 'react';

const Context = createContext();

const ContextProvider = (props) => {

    const [drawer, setDrawer] = useState(false);

    const toggleDrawer = (anchor, open) => () => {
        setDrawer({[anchor]: open});
    };

    return (
        <Context.Provider value={
           { 
             drawer,
             toggleDrawer
            }        
        }>
            {props.children}
        </Context.Provider>
    );
}

const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer }