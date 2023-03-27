// Code your solution here

function findMatching(driverNames, search) {
  search = search.toLowerCase();

  let matchingDrivers = driverNames.filter(function (driver) {
    driver = driver.toLowerCase();
    return driver.includes(search);
  });
  return matchingDrivers;
}

function fuzzyMatch(driverNames, search) {
  search = search.toLowerCase();

  let matchingDrivers = driverNames.filter(function (driver) {
    driver = driver.toLowerCase();
    return driver.startsWith(search);
  });
  return matchingDrivers;
}

function matchName(drivers, search) {
  let matchingDrivers = drivers.filter(function (drivers) {
    return drivers.name === search;
  });
  return matchingDrivers;
}
