import React from 'react';
import store from '../store';
import SearchList from './searchlist';

export default React.createClass({
  getInitialState() {
    return {
      movies: [{movie: {}}]
    }
  },
  componentDidMount() {
    store.movies.on('update change', () => {
      this.setState({movies: store.movies.toJSON()});
    });
  },
  render() {
    // console.log(this.state.movies);
    return (
      <div>
        <h2>Search for a movie here:</h2>
        <form onSubmit={this.handleSearch}>
          <input id="search-area" ref="title" type="text" placeholder="Movie Title" />
          <input id="search-submit" type="submit" value="Search" />
        </form>
        <SearchList movies={this.state.movies[0]}/>
      </div>
    )
  },
  handleSearch(e) {
    e.preventDefault();
    let title = this.refs.title.value;
    // console.log(title)
    store.movies.getMovies(title);
  }
});
