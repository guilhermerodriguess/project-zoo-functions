const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(id1, id2) {
  const result = species.filter((specie) => specie.id === id1 || specie.id === id2);
  return result;
}

module.exports = getSpeciesByIds;
