#!/usr/bin/env node
const movieId = process.argv.slice(2)[0];
const request = require('request');

const filmsUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

request(filmsUrl, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const parseData = JSON.parse(body);
    const characters = parseData.characters;

    const characterPromises = characters.map(charUrl => {
      return new Promise((resolve, reject) => {
        request(charUrl, (err, response, body) => {
          if (err) {
            reject(err); // Reject the promise if there's an error
          } else {
            const parseCharData = JSON.parse(body);
            resolve(parseCharData.name); // Resolve with the character name
          }
        });
      });
    });

    Promise.all(characterPromises)
      .then(characterNames => {
        console.log('OK'); // Print OK only after all names are fetched
        characterNames.forEach(name => console.log(name));
      })
      .catch(error => {
        console.error('Error fetching character data:', error);
      });
  }
});
