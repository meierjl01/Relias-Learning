import React from 'react';
import {browserHistory} from 'react-router';
import Search from '../search';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Search for a movie here:</h2>
        <Search />
      </div>
    )
  }
})
