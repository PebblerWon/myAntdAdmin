import React from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/login';
import Example from './components/Example';
import App from './routes/app.js';
import Menu from './components/Layout/Menu.js'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={Login} />
      <Route path="/index" component={App} />
      <Route path="/menu" component={Menu} />
    </Router>
  );
}

export default RouterConfig;
