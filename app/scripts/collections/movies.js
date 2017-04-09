import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

export default Backbone.Collection.extend ({
  model: Movie,

  //        url: 'http://www.omdbapi.com/?',

  // getMovies(title) {
  //     $.ajax({
  //         url: 'http://www.omdbapi.com/?t=fight+club',
  //         data: {
  //             s: title,
  //         },
  //         success: (response) => {
  //           console.log(response);
  //         }
  //     });
  // }
})
