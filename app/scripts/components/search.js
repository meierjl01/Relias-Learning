import React from 'react';

export default React.createClass({
  render() {
    return (
      <div>
        <h2>Search for a movie here!</h2>
        <form onSubmit={this.handleSearch}>
          <input ref="title" type="text" placeholder="Movie Title" />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  },
  handleSearch() {
    e.preventDefault();
    let title = this.refs.title.value;
    console.log('searched!')
  }
})
