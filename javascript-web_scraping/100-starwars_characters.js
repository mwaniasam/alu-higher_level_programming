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

  const characterNames = characters.map(characterUrl => {
    return new Promise((resolve, reject) => {
      request(characterUrl, (characterError, characterResponse, characterBody) => {
        if (characterError) {
          reject(characterError);
        } else {
          resolve(characterBody.name);
        }
      });
    });
  });

  Promise.all(characterNames)
    .then(names => {
      if (names.length !== characters.length) {
        console.log('Missing some characters');
        console.log(names);
      } else {
        console.log('OK');
      }
    })
    .catch(error => {
      console.error('Error fetching character data:', error);
    });
});
