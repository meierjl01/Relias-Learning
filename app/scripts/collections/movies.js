import Backbone from 'backbone';
import $ from 'jquery';
import Movie from '../models/movie';

export default Backbone.Collection.extend ({
  model: Movie,

  getMovies(title) {
      $.ajax({
          url: 'http://www.omdbapi.com/?',
          data: {
              t: title,
          },
          success: (data) => {
            // console.log(data);
            this.reset();
            this.add(data);
          }
      });
  }
})
