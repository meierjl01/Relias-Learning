import React from 'react';
import store from '../store';
import SearchList from './searchlist';
import Info from './info';

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
        <h2>Welcome to Movie Search!</h2>
        <form onSubmit={this.handleSearch}>
          <input id="search-input" ref="title" type="text" placeholder="Movie Title" />
          <input id="search-submit" type="submit" value="Search" />
        </form>
          <Info />
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
