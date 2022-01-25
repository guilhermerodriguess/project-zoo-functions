const data = require('../data/zoo_data');

// console.log(data.species[0].residents);

function getAnimalsOlderThan(animal, age) {
  const animalName = data.species.filter((specieName) => specieName.name === animal);
  const animalAge = animalName[0].residents.every((value) => value.age >= age);
  return animalAge;
}

module.exports = getAnimalsOlderThan;
