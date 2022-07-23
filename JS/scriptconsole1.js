"use strict";

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('How many movies have you watched?', '');
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('How many movies have you watched?', '');
        }
   },
    rememberMyFilms: function() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('One of the last movies i watched?', '').trim(),
              b = prompt('How much do you rate it?', '');
        if (a != null && b != null && a != '' && b != '' && a.length <  50) {
            personalMovieDB.movies[a] = b; 
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    }
},
    detectPersonalLevel: function() {
    if(personalMovieDB.count < 10) {
        console.log('Very few movies watched');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('You - classic spectator');
    } else if (personalMovieDB.count >= 30) {
        console.log('you - cinephile');
    } else {
        console.log('Error'); 
    }
},
    showMyDB: function (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
}
},
    toggleVisibleDB: function () {
        if(personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
    for(let i = 1; i <= 3; i++) {
        let genre = prompt(`Your favorite genre is numbered ${i}`);
         
        if (genre === '' || genre == null) {
            console.log('You entered incorrect data');
            i--;
        } else {
            personalMovieDB.genres[i -1] = genre;
        }
    }
    personalMovieDB.genres.forEach((item, i) => {
        console.log(`Favourite genres ${i + 1 } - this ${item}`);
    });
}
};
 




