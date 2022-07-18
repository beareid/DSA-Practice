function binarySearch (arr, item) {
  // low and high keeps track of which part of the list we are in
  low = 0;
  high = arr.length - 1;
  // while the item has not been found
  while(low <= high) {
    // mid keeps track of the middle element 
    mid = Math.floor((low + high) / 2);
    guess = arr[mid];
    // If item is found
    if(guess == item) {
      return mid;
    }
    // If guess is too high
    if(guess > item) {
      high = mid - 1;
    }
    // If guess is too low
    else {
      low = mid + 1;
    }
  }
  return "That item is not in the list";
}

const list = [1,4,5,7,8,9];

console.log(binarySearch(list, 5));
console.log(binarySearch(list, 9));
console.log(binarySearch(list, -2));