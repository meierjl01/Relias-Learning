import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';

import Movie from '../../app/scripts/models/movie';

describe('movie model', () => {
  let movie;

  beforeEach(() => {
    movie = new Movie();
  });

  it('should create a Backbone Model', () => {
      expect(movie).to.be.an.instanceof(Backbone.Model);
  });

  it('should be a function (because it\'s a constructor)', () => {
      expect(Movie).to.be.a('function');
  });

  it('should have an idAttribute of id', () => {
      expect(movie).to.have.property('idAttribute');
      expect(movie.idAttribute).to.equal('id');
  });

});
