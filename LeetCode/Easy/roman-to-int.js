'use strict';

const numbers = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

const romanToInt = function(s) {
  const arr = s.split('').map((key) => numbers[key]);
  let res = arr[0];
  let prev = res;
  for (let i = 1; i < arr.length; i++){
    res += arr[i];
    if (arr[i] > prev) {
      res -= prev * 2;
    }
    prev = arr[i];
  }
  return res;
};

console.log(romanToInt('III'));