import React from "react";
import {Switch, Route} from 'react-router-dom';
import DriversPage from "../pages/DriversPage";
import ConstructorsPage from "../pages/ConstructorsPage";

export default function MainContainer() {
    return (
        <Switch>
            <Route exact path="/" component={DriversPage}/>
            <Route path="/drivers" component={DriversPage}/>
            <Route path="/constructors" component={ConstructorsPage}/>
        </Switch>
    )
}