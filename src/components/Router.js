import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../App';
import Repo from './Repo';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/repo" component={Repo} />
        </Switch>
    </BrowserRouter>
);

export default Router;