class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  };
};

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

a.next = b;
b.next = c;
c.next = d;

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);

one.next = two;
two.next = three;
three.next = four;

// A -> B -> C -> D -> NULL
// 1 -> 2 -> 3 -> 4 -> NULL

/* 
  Iterative Traversal of a Linked List
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: ?
*/

const printLL = (head) => {
  let current = head;
  while(current !== null) {
    console.log(current.val);
    current = current.next;
  }
};

printLL(a);

/*
  Recursive Traversal of a Linked List
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: ?
*/

const printLLRecursive = (head) => {
  if(head === null) {
    return;
  }
  console.log(head.val)
  printLLRecursive(head.next);
};

printLLRecursive(a);

/*
  Linked List Values Iterative: adds the nodes of a linked list to an array
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> The output array will be equal to the number of nodes n
*/

const linkedListValuesArray = (head) => {
  let current = head;
  let arr = [];
  while(current !== null) {
    arr.push(current.val);
    current = current.next;
  }
  return arr;
};

console.log(linkedListValuesArray(a));

// Original Implementation of Linked List Values Recursive: adds the nodes of a linked list to an array
// const linkedListValuesArrayRecursive = (head) => {
//   let arr = [];
//   if(head === null) return;
//   arr.push(head.val);
//   linkedListValuesArrayRecursive(head.next);
//   return arr;
// };
// console.log(linkedListValuesArrayRecursive(a));

/* 
  Linked List Values Recursive
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> The output array will be equal to the number of nodes n
*/

const fillValues = (head, arr) => {
  if(head === null) return;
  arr.push(head.val);
  fillValues(head.next, arr);
};

const linkedListValuesArrayRecursive = (head) => {
  let arr = [];
  fillValues(head, arr);
  return arr;
};

console.log(linkedListValuesArrayRecursive(a));

/*
  Sum List: sums up all node values of a linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> we start primitive values in variables current and sum
*/

const sumList = (head) => {
  let current = head;
  let sum = 0;
  while(current !== null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

console.log(sumList(one));

/*
  Sum List Recursive: sums up all node values of a linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> due to the n recursive calls
*/

const sumListRecursive = (head) => {
  if(head === null) return 0;
  return head.val + sumListRecursive(head.next);
};

console.log(sumListRecursive(one));

/*
  Linked List Find: returns a boolean based on if a given value is in the linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> using a constant number of variables
*/

const linkedListFind = (head, item) => {
  let current = head;
  while(current !== null) {
    if(current.val === item) return true;
    current = current.next;
  }
  return false;
}; 

console.log(linkedListFind(one, 3)); // true
console.log(linkedListFind(one, 5)); // false

/*
  Linked List Find Recursive: returns a boolean based on if a given value is in the linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> due to the n recursive calls on the call stack; worst case is if our target is not found in the linked list and we have to check every node until the end null
*/

const linkedListFindRecursive = (head, item) => {
  if(head === null) return false;
  if(head.val === item) return true;
  return linkedListFindRecursive(head.next, item);
};

console.log(linkedListFindRecursive(one, 1)); // true
console.log(linkedListFindRecursive(one, 8)); // false

/*
  Get Node Value: returns the value of a node at a certain index
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> tracking simple number variables
*/

const getNodeValueWhile = (head, index) => {
  let current = head;
  let count = 0;
  while(current !== null) {
      if(count === index) return current.val;
      count++;
      current = current.next;
  }
  return null;
};

console.log(getNodeValueWhile(one, 2));

/*
  Get Node Value Recursive: returns the value of a node at a certain index
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> storing every call on the call stack
*/

// With the recursive function instead of counting up we are counting down to index = 0
const getNodeValueRecursive = (head, index) => {
  // If the target index is out of range
  // if the linked list is 4 long but the index is greater than 4
  if (head === null) return null;
  if(index === 0) return head.val;
  return getNodeValueRecursive(head.next, index - 1);
};

console.log(getNodeValueRecursive(one, 2));

/*
  Reverse Linked List: reverses linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> only need a fixed number of variables
*/

const reverseLL = (head) => {
  // The variable prev needs to be null so that the original head's next node is null making the orginal head the tail node
  let prev = null;
  let current = head;
  while(current !== null) {
      /* 
        The variable next is used to keep track of the current node's original next node when the link is broken
        Not including next will cause the code to return null if current is reassigned to current.next, since the old head's next node will be null due to prev equaling null
      */
      let next = current.next;
      // Reverses the link
      current.next = prev;
      prev = current;
      current = next;
}
// The original tail becomes the head
return prev.val;
};

console.log(reverseLL(one));

/*
  Reverse Linked List Recursive: reverses linked list
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> storing every call on the call stack
*/

const reverseLLRecursive = (head, prev = null) => {
  if(head === null) return prev;
  let next = head.next;
  head.next = prev;
  return reverseLLRecursive(next, head);
};

console.log(reverseLLRecursive(one));