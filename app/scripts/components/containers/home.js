import React from 'react';
import {browserHistory} from 'react-router';
import Search from '../search';

export default React.createClass({
  render() {
    return (
      <div>
        <div id="header"></div>
        <Search />
      </div>
    )
  }
})
