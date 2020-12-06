import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';

import AuthService from '../services/AuthService';

import Main from '../pages/Main';
import Cadastrar from '../pages/Cadastrar';
import NotFound from '../pages/Error/NotFound';
import SubmitComponent from '../pages/Arquivos';
import Calculos from '../pages/Calculos';
import Database from '../pages/PersonalDatabase'
const PrivateRoute = (props) => (
    AuthService.isAuthenticated()
        ? <Route {...props}/>
        : <Redirect to={{pathname: '/', state: {from: props.location}}}/>
);

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={'/'} component={Main}/>
            <Route path={'/cadastrar/:id'} component={Cadastrar}/>
            <Route path={'/criptografia'} component={SubmitComponent}/>
            <Route path={'/calculos'} component={Calculos}/>
            <Route path={'/database'} component={Database}/>
            <PrivateRoute exact path={'/'} component={Main}/>

            <Route path="*" component={NotFound}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;
