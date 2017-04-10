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
        <form onSubmit={this.handleSearch}>
          <input ref="title" type="text" placeholder="Movie Title" />
          <input type="submit" value="Search" />
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
