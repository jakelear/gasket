import React, { Component } from 'react';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import AppList from './components/app-list';
import AppPage from './components/app-page';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/app/:id" component={AppPage} />
          <AppList />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
