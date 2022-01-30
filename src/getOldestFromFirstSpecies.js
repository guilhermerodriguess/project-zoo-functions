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

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
