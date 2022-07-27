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

// A -> B -> C -> D -> NULL

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
    console.log(head.val);
  }
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

linkedListValuesArray(a);

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