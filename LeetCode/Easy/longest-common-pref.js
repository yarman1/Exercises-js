'use strict';

const longestCommonPrefix = function(strs) {
  let res = '';
  let letter = '';
  const firstWord = strs[0];
  let flag;
  if (firstWord.length === 0){
    return res;
  }
  let i = 0;
  while (flag !== false){
    letter = firstWord.charAt(i);
    flag = true;
    for (let j = 1; j < strs.length; j++) {
      if (strs[j].charAt(i) !== letter) {
        flag = false;
        break;
      }
    }
    if (flag === true) {
      res += letter;
      i++;
    }
    if (i >= firstWord.length) {
      break;
    } 
  }
  return res;
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));