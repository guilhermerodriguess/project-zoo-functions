const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const criança = entrants.filter((person) => person.age < 18).length;
  const adulto = entrants.filter((person) => person.age >= 18 && person.age < 50).length;
  const idoso = entrants.filter((person) => person.age >= 50).length;
  const entradas = {
    adult: adulto,
    child: criança,
    senior: idoso,
  };
  return entradas;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const calc = countEntrants(entrants);

  return calc.child * prices.child + calc.adult * prices.adult + calc.senior * prices.senior;
}

module.exports = { calculateEntry, countEntrants };
