import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../actionCreators';
import Main from '../../ui/pages/Main';

const mapStateToProps = ({ auth }) => {
  return {
    loggedIn: auth.loggedIn,
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export const App = connect(mapStateToProps, mapDispatchToProps)(Main);
