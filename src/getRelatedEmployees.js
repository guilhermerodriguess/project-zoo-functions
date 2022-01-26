const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const idVerify = employees.filter(({ managers }) => managers[0] === id || managers[1] === id);
  const result = idVerify.length > 0;
  return result;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const id = managerId;
    const con = employees.filter(({ managers }) => managers[0] === id || managers[1] === id);
    const result = con.map((item) => `${item.firstName} ${item.lastName}`);
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
