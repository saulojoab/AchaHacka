import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Page1 from './pages/page1';
import Page2 from './pages/page2';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Page1} />
            <Route path="/page2" component={Page2} />
        </Switch>
    </BrowserRouter>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();