const convertToCelsius = function(value) {
  const toCelsius = (value - 32) * 5/9;
  const roundToOneDec = Math.round(toCelsius * 10)/10;
  return roundToOneDec; 
};

const convertToFahrenheit = function(value) {
  const toFahrenheit = value * 9/5 + 32;
  const roundToOneDec = Math.round(toFahrenheit * 10)/10;
  return roundToOneDec;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
