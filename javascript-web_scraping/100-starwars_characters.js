#!/usr/bin/node

const request = require('request');

const movieId = process.argv[2];

const options = {
  url: `https://swapi.dev/api/films/${movieId}`,
  json: true
};

request(options, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie data:', error);
    return;
  }

  const characters = body.characters;

  characters.forEach(characterUrl => {
    request(characterUrl, (characterError, characterResponse, characterBody) => {
      if (characterError) {
        console.error('Error fetching character data:', characterError);
        return;
      }

      console.log(characterBody.name);
    });
  });
});
