const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const allAnimals = {};
    species.forEach((specie) => {
      allAnimals[specie.name] = specie.residents.length;
    });
    return allAnimals;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.filter((sexo) => sexo.sex === animal.sex).length;
}

module.exports = countAnimals;
