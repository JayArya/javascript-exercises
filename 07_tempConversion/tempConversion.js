const ftoc = function (temperature) {
  let convertedTemperature = (temperature - 32) * (5.0 / 9.0);
  return Number(convertedTemperature.toFixed(1));
};

const ctof = function (temperature) {
  let convertedTemperature = temperature * (9.0 / 5.0) + 32;
  return Number(convertedTemperature.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
