/*
  Two Pointers; Sliding Window

  Left Pointer = Day that we buy
  Right Pointer = Day that we sell

  Max Profit Right Pointer - Left Pointer
*/

var maxProfit = function (prices) {
  let left = 0 // left = buy
  let right = 1; // right = sell
  let maxProf = 0;

  // Iterate until end of arr 
  while(right < prices.length) {
    // Check if it is a profitable transaction
    if(prices[left] <= prices[right]) {
      currProf = prices[right] - prices[left];
      maxProf = Math.max(maxProf, currProf);
    }
    else {
      left = right;
    } 
    right++;
  }
  
  return maxProf;
};

const prices1 = [7,1,5,3,6,4];
const prices2 = [7,6,4,3,1];
console.log(maxProfit(prices1));
console.log(maxProfit(prices2));