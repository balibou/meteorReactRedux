import React from 'react';
import { Grid } from 'react-bootstrap';
import AppNavigation from '../../ui/containers/app-navigation';

const Main = React.createClass({
  propTypes: {
    children: React.PropTypes.element.isRequired,
    loggedIn: React.PropTypes.bool.isRequired,
  },
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       loggedIn: this.props.loggedIn,
     })
    );

    return (
      <div>
        <AppNavigation />
        <Grid>
          {childrenWithProps}
        </Grid>
      </div>
    );
  },
});

export default Main;
