import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { Tracker } from 'meteor/tracker';
import rootReducer from './reducers/index';
import { Meteor } from 'meteor/meteor';

const store = applyMiddleware(thunk)(createStore)(rootReducer);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);

Tracker.autorun(() => {
  store.dispatch({
    type: 'SET_LOGIN_STATUS',
    loggedIn: !!Meteor.userId(),
  });
});
