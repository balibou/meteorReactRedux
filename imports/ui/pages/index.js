import React from 'react';
import { Jumbotron } from 'react-bootstrap';

export class Index extends React.Component {
  render() {
    if (!this.props.loggedIn) {
      return <div>Not logged in</div>;
    }
    return (
      <Jumbotron className="text-center">
        <h2>Base</h2>
        <p>A starting point for Meteor applications.</p>
        <p><a className="btn btn-success" href="https://themeteorchef.com/base" role="button">Read the Documentation</a></p>
        <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.6.0</p>
      </Jumbotron>
    );
  }
}
