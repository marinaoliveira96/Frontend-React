import React, { Component } from 'react';
import UserContext from './userContext';

export default class MovieList extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {/* consumer espera uma função como filha */}

        {(UserContext) => <div>Movie List {UserContext.name}</div>}
      </UserContext.Consumer>
    );
  }
}
