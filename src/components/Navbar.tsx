import React from "react";
import {AppBar, Tab} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import {Tabs} from "@material-ui/core";
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Tabs value={false} variant={'scrollable'}>
                    <Tab label="Drivers" component={Link} to="/drivers"/>
                    <Tab label="Constructors" component={Link} to="/constructors"/>
                </Tabs>
            </Toolbar>
        </AppBar>
    )
}