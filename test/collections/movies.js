import Backbone from 'backbone';

import { expect } from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import Movies from '../../app/scripts/collections/movies';

describe('movies collection', () => {
    let movies;

    beforeEach(() => {
        movies = new Movies();
    });

    it('should create a Backbone Collection', () => {
        expect(movies).to.be.an.instanceof(Backbone.Collection);
    });

    it('should have a getMovies method', () => {
        expect(movies).to.have.property('getMovies');
        expect(movies.getMovies).to.be.a('function');
    });

});
