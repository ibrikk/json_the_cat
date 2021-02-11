const request = require('request');

const fetchBreedDesc = (breed, cb) => {
  request(
    'https://api.thecatapi.com/v1/breeds/search?q=${breed}',
    (error, response, body) => {
      if (body === '[]') {
        cb(error, null);
      } else {
        let desc = JSON.parse(body)[0].description;
        cb(error, desc);
      }
    }
  );
};

module.exports = { fetchBreedDesc };
