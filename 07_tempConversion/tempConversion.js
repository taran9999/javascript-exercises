const ftoc = function(f) {
  return +((f - 32) * (5.0 / 9.0)).toFixed(1);
};

const ctof = function(c) {
  return +(c * (9.0 / 5.0) + 32).toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
