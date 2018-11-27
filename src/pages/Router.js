import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages/HomePage/Home'

const Router = () => (
    <BrowserRouter>
    <Switch>
        <Route exact path="/" component={Home}/>
        {/* <Route path="/LMS/:UserId" component={Dashboard}/> */}
        {/* <Route path="/LMS/:UserId/courses" component={Account} /> */}
    </Switch>
    </BrowserRouter>
);

export default Router;