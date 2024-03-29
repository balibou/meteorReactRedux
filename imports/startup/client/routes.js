import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { App } from '../../ui/layouts/app';
import { Documents } from '../../ui/pages/documents';
import { Index } from '../../ui/pages/index';
import { Login } from '../../ui/pages/login';
import { NotFound } from '../../ui/pages/not-found';
import { RecoverPassword } from '../../ui/pages/recover-password';
import { ResetPassword } from '../../ui/pages/reset-password';
import { Signup } from '../../ui/pages/signup';
import { Provider } from 'react-redux';
import store, { history } from '../../store';

const requireAuth = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Provider store={store}>
      <Router history={ history }>
        <Route path="/" component={ App }>
          <IndexRoute name="index" component={ Index }/>
          <Route name="documents" path="/documents" component={ Documents } onEnter={ requireAuth } />
          <Route name="login" path="/login" component={ Login } />
          <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
          <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
          <Route name="signup" path="/signup" component={ Signup } />
          <Route path="*" component={ NotFound } />
        </Route>
      </Router>
    </Provider>,
    document.getElementById('react-root')
  );
});
