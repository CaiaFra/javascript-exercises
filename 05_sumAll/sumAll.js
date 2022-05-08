const sumAll = function(num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';
  
  let sum = 0;
  let major, minor;

  if (num1 > num2) {
    major = num1;
    minor = num2;
  } else if (num2 > num1) {
    major = num2;
    minor = num1;
  } else {
    return num1;
  }

  for (let i = minor; i <= major; i++) {
    sum += i;
  }
  return sum;

};

// Do not edit below this line
module.exports = sumAll;
