/* 
  Uncompress: takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern: <number><char> for example, '2c' or '3a'
  Can not discribe the Big O complexity just by using the length of the input string.
  n = # of groups (Ex: for 1000p10000q -> 2 would be n)
  m = max # for any group (Ex: for 1000p10000q -> 10000 would be m)
  Time Complexity: O(n*m): 
  Space Complexity: O(n*m): have to construct the output string which contains n*m characters
*/

const uncompress = (s) => {
  /* Two Pointer */
  // Use an array instead of a string because they are immutable(characters within can not be changed) so a new string is created upon concatenation causing a O(n) liner time within the while loop
  let result = [];
  // Used to keep track of the start of the number portion
  let i = 0;
  // Used to find the end of any number sequence
  let j = 0;
  // String of numeric characters
  const num = '0123456789';

  while(j < s.length) {
    if(numbers.includes(s[j])) {
      // If current character is a number increment j
      j += 1;
    } else {
      // If current character is not a number (s[j] = char), slice from i upto j to get the number sequence
      const num = Number(s.slice(i,j));
      // Iterate num times and add the character at s[j] to the result array
      for(let count = 0; count < num; count++) {
        result.push(s[j]);
      }
      // Update counters/pointers
      j += 1;
      i = j;
    }
  }
  return result.join('');
};

console.log(uncompress('3n12e2z'));

/* 
  Compress: takes in a string as an argument. The input string will be formatted into multiple groups according to the following pattern: <number><char> for example, '2c' or '3a'
  Can not discribe the Big O complexity just by using the length of the input string.
  n = # of groups (Ex: for 1000p10000q -> 2 would be n)
  m = max # for any group (Ex: for 1000p10000q -> 10000 would be m)
  Time Complexity: O(n*m): 
  Space Complexity: O(n*m): have to construct the output string which contains n*m characters
*/

const compress = (s) => {
  /* Two Pointer */
  let result = [];
  // Represents the start of a consecutive streak
  let i = 0;
  // Represents the end of a consecutive streak
  let j = 0;
  while(j < s.length) {
    if(s[i] === s[j]) {
      j += 1;
    } else {

    }
  }
};

console.log(compress('nnneeeeeeeeeeeezz'));