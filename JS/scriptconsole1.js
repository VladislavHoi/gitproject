"use strict";
const numberOfFilms = +prompt('How many movies have you watched?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('One of the last movies i watched?', ''),
      b = prompt('How much do you rate it?', ''),
      c = prompt('One of the last movies i watched?', ''),
      d = prompt('How much do you rate it?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



