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