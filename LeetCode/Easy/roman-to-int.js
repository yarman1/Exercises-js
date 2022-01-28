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
  const last = arr.length - 1;
  let res = 0;
  for (let i = 0; i < last; i++) {
    if (arr[i] < arr[i + 1]) {
      res -= arr[i];
    } else {
      res += arr[i];
    }
  }
  return res + arr[last];
};

console.log(romanToInt('III'));