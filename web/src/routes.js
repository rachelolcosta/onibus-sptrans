import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Linhas from './pages/Linhas'
import NotFound from './pages/NotFound';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/linhas" component={Linhas}/>
                <Route exact path="/not-found" component={NotFound}/>
                <Redirect to="/not-found" />
            </Switch>
        </BrowserRouter>
    )
}
