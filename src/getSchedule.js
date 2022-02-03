const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const allInfo = {};
const hoursKeys = Object.keys(hours);
const mapAnimals = species.map((specie) => specie.name);

function getFullInfo() {
  hoursKeys.forEach((day) => {
    allInfo[day] = {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: species
        .filter((currDay) => currDay.availability.includes(day))
        .map((specie) => specie.name),
    };
    if (day === 'Monday') {
      allInfo[day] = { officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return allInfo;
}

function returnEntrie(scheduleTarget) {
  const myObjectEntries = Object.entries(getFullInfo());
  const findMyEntrie = myObjectEntries.filter((day) => day[0] === scheduleTarget);
  return Object.fromEntries(findMyEntrie);
}

function returnAvailability(scheduleTarget) {
  const findAnimal = species.find((specie) => specie.name === scheduleTarget);
  return findAnimal.availability;
}

function getSchedule(scheduleTarget) {
  let term;
  if (scheduleTarget === undefined) {
    term = getFullInfo();
  } else if (hoursKeys.includes(scheduleTarget)) {
    term = returnEntrie(scheduleTarget);
  } else if (mapAnimals.includes(scheduleTarget)) {
    term = returnAvailability(scheduleTarget);
  } else {
    term = getFullInfo();
  }
  return term;
}

module.exports = getSchedule;
