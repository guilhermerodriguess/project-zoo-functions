const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {

  species.map(() => {});
}

console.log(getAnimalMap({ includeNames: true, sex: 'female' }));

module.exports = getAnimalMap;
