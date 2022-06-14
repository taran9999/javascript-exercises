const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

const multiply = function(arr) {
  let prod = 1;
  for(let i = 0; i < arr.length; i++) {
    prod *= arr[i];
  }
  return prod;
};

const power = function(a, b) {
	if(b == 0 && a != 0) {
    return 1;
  }
  
  let ans = 1;
  for(let i = 0; i < b; i++) {
    ans *= a;
  }
  return ans;
};

const factorial = function(n) {
	let ans = 1;
  if(n == 0) {
    return 1;
  }
  let i = n;
  while(i > 0) {
    ans *= (i--);
  }
  return ans;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
