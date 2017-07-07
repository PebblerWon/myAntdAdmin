import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login';
import Example from './components/Example';
import App from './routes/app.js';
import Menu from './components/Layout/Menu.js'
import User from './routes/user'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
    <Route path="/login" component={Login} />
      <Route path="/" component={App}>
      	 <Route path="/user" component={User} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
