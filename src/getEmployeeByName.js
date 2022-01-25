const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(func) {
  if (!func) {
    return {};
  }
  const names = employees.find((name) => name.firstName === func || name.lastName === func);
  return names;
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
