import React from "react";
import {Switch, Route} from 'react-router-dom';
import DriversPage from "../pages/DriversPage";
import ConstructorsPage from "../pages/ConstructorsPage";
import CircuitsPage from "../pages/CircuitsPage";

export default function MainContainer() {
    return (
        <Switch>
            <Route exact path="/" component={DriversPage}/>
            <Route path="/drivers" component={DriversPage}/>
            <Route path="/constructors" component={ConstructorsPage}/>
            <Route path="/circuits" component={CircuitsPage}/>
        </Switch>
    )
}