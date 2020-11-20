import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import AuthService from '../services/AuthService';

import Main from '../pages/Main';
import NotFound from '../pages/Error/NotFound';

const PrivateRoute = (props) => (
    AuthService.isAuthenticated()
        ? <Route {...props}/>
        : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
