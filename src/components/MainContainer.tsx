import React from "react";
import {Route, Switch} from 'react-router-dom';
import DriversPage from "../pages/DriversPage";
import ConstructorsPage from "../pages/ConstructorsPage";
import CircuitsPage from "../pages/CircuitsPage";
import RacesPage from "../pages/RacesPage";

export default function MainContainer() {
    return (
        <Switch>
            <Route exact path="/" component={DriversPage}/>
            <Route path="/drivers" component={DriversPage}/>
            <Route path="/constructors" component={ConstructorsPage}/>
            <Route path="/circuits" component={CircuitsPage}/>
            <Route path="/races" component={RacesPage}/>
        </Switch>
    )
}