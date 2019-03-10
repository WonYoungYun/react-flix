import React, { Component } from 'react';
import Header from './Header'
import Router from './Router'


class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
