import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../pages/Results/NotFound";
import Home from "../pages/Home";
import Search from "../pages/Search";
import Topic from "../pages/Topic";

const Routes = () => {

    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/search/photos/:query" component={Search}/>
            <Route exact path="/t/:query" component={Topic}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default Routes;
