const { fetchBreedDesc } = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDesc(breedName, (error, desc) => {
  if (error) {
    console.log(`Error fetching details: ${error}`)
  } else {
    console.log(desc);
  }
});