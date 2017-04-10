import React from 'react';
import moment from 'moment';

export default React.createClass({
  render() {
    // console.log(this.props.movies);
    let pic;
    if(this.props.movies.Poster !== undefined) {
      pic = <img src={this.props.movies.Poster} height="300" width="200" />;
    } else {
      pic = <div></div>
    }
    return (
      <ul id="movie-list">
        {pic}
        <li>{this.props.movies.Title}</li>
        <li>{this.props.movies.Rated}</li>
        <li>{this.props.movies.Genre}</li>
        <li>{this.props.movies.Runtime}</li>
        <li>{this.props.movies.Plot}</li>
      </ul>
    )
  }
});
