import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Home from '../routes/Home'
import Search from '../routes/Search'
import TV from '../routes/TV'

export default () => (
    <Router>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/search" exact component={Search} />
            <Route path="/tv" exact component={TV} />
            <Redirect from='*' to="/" />
        </Switch>
    </Router>
)
