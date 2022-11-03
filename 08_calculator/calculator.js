const add = function(...args) {
	return sum(args);
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(list) {
  let sum = 0;
  for (const num of list) { sum += num}
  return sum;
};

const multiply = function(list) {
  mult = 1;
  for (num of list) {mult *= num}

  return mult;
};

const power = function(a, b) {
	return a**b;
};

const factorial = function(a) {
  let fact = 1;
	for (let i=1; i<=a; i++ ){
    fact *= i;
  }
  return fact;
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
