const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getOldestFromFirstSpecies(id) {
  const firstAnimal = () => {
    const person = employees.find((employee) => employee.id === id);
    const { responsibleFor } = person;
    return responsibleFor[0];
  };

  const oldestSpecie = () => {
    const animal = species.find((specie) => specie.id === firstAnimal());
    const { residents } = animal;
    const arrayAge = residents.map((resident) => resident.age);
    const result = residents.filter((resident) => Math.max(...arrayAge) === resident.age);
    return Object.values(result[0]);
  };
  return oldestSpecie();
}

module.exports = getOldestFromFirstSpecies;
