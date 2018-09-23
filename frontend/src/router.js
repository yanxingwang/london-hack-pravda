import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import SignupPage from './routes/SignupPage';
import InstallCode from "./routes/InstallCode";
import BlogPage from "./routes/BlogPage";
import HomePage from "./routes/HomePage";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/onboard" exact component={SignupPage} />
        <Route path="/install" exact component={InstallCode} />
        <Route path="/blog" exact component={BlogPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
