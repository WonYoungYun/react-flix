import React from 'react';
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Header from './Header';
import Home from '../containers/Home';
import Search from '../containers/Search';
import TV from '../containers/TV';
import Detail from '../containers/Detail';
import NotFound from './NotFound';

export default () => (
    <Router>
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/search" exact component={Search} />
                <Route path="/show" exact component={TV} />
                <Route path="/movie/:id" component={Detail} />
                <Route path="/show/:id" component={Detail} />
                <Route path="/notfound" component={NotFound} />
                <Redirect from='*' to="/notfound" />
            </Switch>
        </>
    </Router>
)
