const request = require('request');

function get_movie_title(movie_id) {
    const url = `https://swapi-api.alx-tools.com/api/films/${movie_id}`;
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const movie_data = JSON.parse(body);
            console.log(movie_data.title);
        } else {
            console.log("Error: Failed to fetch movie data");
        }
    });
}