/*
  
Create a function that takes a sorted array and a target value. Return the index of the target value in the array. If the target value is not in the array, return -1.

*/

const list = [1,3,4,7,11,12,15,22];
const arr = ['a', 'b', 'c', 'x', 'y', 'z'];

// Iterative Implementation: Time Complexity -> O(logn) & Space Complexity O(1) 
var binarySearchIterative = function(arr, target) {

  let start = 0;
  let end = arr.length - 1;
  
  while(start <= end) {
    // This line outside of the lopp causes an infinte loop
    let middle = Math.floor( (start + end) / 2 );

    // If current middle element is equal to target return element index
    if(arr[middle] === target) return middle;
    
    // If current middle element is greater than target value, the tagtet value is in the left subarray and the right subarray does not need to be searched
    if(arr[middle] > target) end = middle - 1;

    // Current middle element is less than target value, the tagtet value is in the right subarray and the left subarray does not need to be searched
    if(arr[middle] < target) start = middle + 1;
  }

  // Target value is not in array
  return -1;
  
}

console.log('Binary Search Iterative: ');
console.log(binarySearchIterative(list, 3));
console.log(binarySearchIterative(list, 11));
console.log(binarySearchIterative(list, 22));
console.log(binarySearchIterative(list, -4));
console.log(binarySearchIterative(arr, 'b'));
console.log(binarySearchIterative(arr, 'z'));
console.log(binarySearchIterative(arr, 'w'));

// Recursive Implementation: Time Complexity -> O(logn) & Space Complexity O(logn)
const binarySearchRecursive = function(arr, target, start=0, end=arr.length - 1) {
  if(start > end) return -1;

  let middle = Math.floor( (start+end) / 2 );

  if(arr[middle] === target) return middle;

  if(arr[middle] > target) return binarySearchRecursive(arr, target, start, middle-1);

  if(arr[middle] < target) return binarySearchRecursive(arr, target, middle+1, end);
}

console.log('Binary Search Recursive: ');
console.log(binarySearchRecursive(list, 3));
console.log(binarySearchRecursive(list, 11));
console.log(binarySearchRecursive(list, 22));
console.log(binarySearchRecursive(list, -4));
console.log(binarySearchRecursive(arr, 'b'));
console.log(binarySearchRecursive(arr, 'z'));
console.log(binarySearchRecursive(arr, 'w'));