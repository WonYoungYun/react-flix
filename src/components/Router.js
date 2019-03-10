import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Header from './Header'
import Home from '../routes/Home'
import Search from '../routes/Search'
import TV from '../routes/TV'

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/tv" exact component={TV} />
                <Redirect from='*' to="/" />
            </Switch>
        </>
    </Router>
)
