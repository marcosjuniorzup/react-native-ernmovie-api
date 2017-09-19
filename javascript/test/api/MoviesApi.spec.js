/**
 * Movies
 * Top Rated Movies
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * Do not edit the class manually.
 */
import {expect} from 'chai';
import MoviesRequests  from '../../src/api/MoviesRequests';

describe('MoviesApi', function(){
  let requests;
  beforeEach(function() {
    requests = new MoviesRequests({
        registerHandler(){
        },
        sendRequest(){
        }
    });

  });


    describe('getMovieDetail', function() {
      it('should send request getMovieDetail successfully', ()=> {
        //uncomment below and update the code to test getMovieDetail
        //return requests.getMovieDetail(movieId: string).then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

    describe('getTopRatedMovies', function() {
      it('should send request getTopRatedMovies successfully', ()=> {
        //uncomment below and update the code to test getTopRatedMovies
        //return requests.getTopRatedMovies().then(response=> {
        //  if (error) throw error;
        //  expect(response).to.be();
        //});

      });
    });

});
