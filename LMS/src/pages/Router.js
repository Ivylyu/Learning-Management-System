import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../LMS/src/pages/HomePage/Home.jsx'

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
    </BrowserRouter>
);