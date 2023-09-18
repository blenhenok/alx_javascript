#!/usr/bin/node
const request = require('request');

function count_movies_with_wedge_antilles(api_url) {
    const character_id = 18;
    request(api_url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            const films_data = JSON.parse(body);
            const movies_with_wedge_antilles = films_data.results.filter(film => film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${character_id}/`));
            console.log(`Number of movies with Wedge Antilles: ${movies_with_wedge_antilles.length}`);
        } else {
            console.log("Error: Failed to fetch movie data");
        }
    });
}
