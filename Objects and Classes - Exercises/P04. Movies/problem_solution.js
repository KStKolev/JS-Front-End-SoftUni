function printMovies(moviesArray) {
    const movieStorageArray = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name,
            this.director = director,
            this.date = date
        }
    }

    const isExisting = function checkNameExist(name) {
        let movie = movieStorageArray.find(movie => movie.name === name);
        return movie;
    }
    for (let index = 0; index < moviesArray.length; index++) {

        const splittedMovieArray = moviesArray[index].split(" ");
        if (splittedMovieArray.includes("addMovie")) {
            const name = splittedMovieArray.slice(1, splittedMovieArray.length).join(' ');
            movieStorageArray.push(new Movie(name, null, null));
        }
        else if (splittedMovieArray.includes("directedBy")) {
            let movie = isExisting(
                splittedMovieArray.slice(0, splittedMovieArray.indexOf("directedBy")).join(' '));
            if (movie !== undefined) {
                movie.director = splittedMovieArray
                .slice(splittedMovieArray.indexOf("directedBy") +1, splittedMovieArray.length).join(' ');
            }
        } else {
            let movie = isExisting(
                splittedMovieArray.slice(0, splittedMovieArray.indexOf("onDate")).join(' '));
            if (movie !== undefined) {
                movie.date = splittedMovieArray
                .slice(splittedMovieArray.indexOf("onDate") +1, splittedMovieArray.length).join(' ');
            }
        }
    }

    movieStorageArray.forEach(movie => movie.date !== null && movie.name !== null 
        && movie.director !== null ? console.log(JSON.stringify(movie)) : null);
}

printMovies([
    'addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo'
    ]
    );