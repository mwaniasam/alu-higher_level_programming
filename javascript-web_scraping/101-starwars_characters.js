#!/usr/bin/node
const request = require('request');

const movieId = process.argv.slice(2)[0];

const filmsUrl = `https://swapi-api.hbtn.io/api/films/${movieId}`;

function printCharacterNames(characters) {
  const characterPromises = characters.map(charUrl => {
    return new Promise((resolve, reject) => {
      request(charUrl, (error, response, body) => {
        if (error) {
          reject(error); // Reject the promise on error
        } else {
          const parseCharData = JSON.parse(body);
          resolve(parseCharData.name); // Resolve with the character name
        }
      });
    });
  });

  Promise.all(characterPromises)
    .then(characterNames => {
      console.log('OK');
      characterNames.forEach(name => console.log(name));
    })
    .catch(error => {
      console.error('Error fetching character data:', error);
    });
}

request(filmsUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    const parseData = JSON.parse(body);
    const characters = parseData.characters;
    printCharacterNames(characters);
  }
});
