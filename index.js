/*  function returnFirstTwoDrivers(a) {
    return a.slice(0, 2);
  }
  
  function returnLastTwoDrivers(a) {
    return a.slice(-2);
  }
  
  function selectingDrivers(a, returnFirstTwoDrivers, returnLastTwoDrivers) {
    return [returnFirstTwoDrivers(a), returnLastTwoDrivers(a)];
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers, // Add selectingDrivers to the exported object
  };*/

  // helpers.js

// Define the functions
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
  }
  
  function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
  }
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

  function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }
  
  function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
  }
  
  function selectDifferentDrivers(drivers, fn) {
    return fn(drivers);
  }
  
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers, 
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers,
  };
  