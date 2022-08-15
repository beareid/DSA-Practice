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

/*
  Zipper Lists: combines linked list
  n = # of nodes for list 1
  m = # of nodes for list 2
  Time Complexity: O(min(n,m)) -> We only need as many iterations as the shorter linked list
  Space Complexity: O(1) -> We are only rerouting next pointers and using a fixed number of variables
*/

const zipperLists = (head1, head2) => {
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;
  let count = 0;

  while(current1 !== null && current2 !== null) {
    if(count%2 === 0) {
      // let next = current2.next;
      tail.next = current2;
      current2 = current2.next;
    }
    else {
      // let next = current1.next;
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if(current1 !== null) tail.next = current1;
  if(current2 !== null) tail.next = current2;

  return head1;
};

console.log(zipperLists(one, a));

/*
  Zipper Lists Recursive: combines linked list
  n = # of nodes for list 1
  m = # of nodes for list 2
  Time Complexity: O(min(n,m)) -> We only need as many iterations as the shorter linked list
  Space Complexity: O(min(n,m)) -> Storing every call equal to the size of the shorter linked list on the call stack
*/

const zipperListsRecursive = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;
  const next1 = head1.next;
  const next2 = head2.next;
  head1.next = head2;
  head2.next = zipperListsRecursive(next1, next2);
  return head1;
}

console.log(zipperListsRecursive(one, a));

/*
  Merge Lists: merge linked list
  n = # of nodes for list 1
  m = # of nodes for list 2
  Time Complexity: O(min(n,m)) -> We only need as many iterations as the shorter linked list
  Space Complexity: O(1) -> We are only rerouting next pointers and using a fixed number of variables
*/

const mergeLists = (head1, head2) => {
  let dummyHead = new Node(null);
  let tail = dummyHead;
  let current1 = head1;
  let current2 = head2;

  while(current1 !== null && current2 !== null) {
    if(current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    }
    else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  
  if(current1 !== null) tail.next = current1;
  if(current2 !== null) tail.next = current2;
  
  return dummyHead.next;
};

console.log(mergeLists(one, a));

/*
  Merge Lists Recursive: merge linked list
  n = # of nodes for list 1
  m = # of nodes for list 2
  Time Complexity: O(min(n,m)) -> We only need as many iterations as the shorter linked list
  Space Complexity: O(min(n,m)) -> Storing every call equal to the size of the shorter linked list on the call stack
*/

const mergeListsRecursive = (head1, head2) => {
  if(head1 === null && head2 === null) return null;
  if(head1 === null) return head2;
  if(head2 === null) return head1;
  if(head1.val < head2.val) {
    const next1 = head1.next;
    head1.next = mergeListsRecursive(next1, head2);
    return head1;
  } else {
    const next2 = head2.next;
    head1.next = mergeListsRecursive(head1, next2);
    return head2;
  }
};

console.log(mergeListsRecursive(one, a));

/*
  Univalue: does the linked list contain a single unique value
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> Using a constant number of variables
*/

const isUnivalueList = (head) => {
  let current = head;
  while(current !== null) {
    if(current.val !== head.val) return false;
    current = current.next;
  }
  return true;
};

console.log(isUnivalueList(one));

/*
  Univalue Recursive: does the linked list contain a single unique value
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(n) -> storing every call on the call stack
*/

const isUnivalueListRecursive = (head, prevVal = null) => {
  if(head === null) return true;
  if(preVal !== null && head.val !== prevVal) return false;
  return isUnivalueListRecursive(head.next, haed.val);
};

console.log(isUnivalueListRecursive(one));

/*
  Longest Streak: length of the longest consecutive streak
  n = # of nodes
  Time Complexity: O(n) -> Iterating through all n nodes
  Space Complexity: O(1) -> Using a constant number of variables
*/

// First Attempt
// const longestStreak = (head) => {
//   let n1 = head;
//   let n2 = head;
//   let count = 0;
//   let streak = 0;
//   while(n1 !== null){
//       if(n1.val === n2.val) {
//           count += 1;
//           n1 = n1.next;
//       } 
//       else {
//           if(streak < count) {
//               streak = count;
//           }
//           count = 0;
//           n2 = n2.next;
//       }
//   }
//   return Math.max(streak, count);
// };

// console.log(longestStreak(null));

const longestStreak = (head) => {
  let currentStreak = 0;
  let maxStreak = 0;
  let current = head;
  let prev = null;
  while(current !== null) {
    if(current.val === prev) {
      currentStreak += 1;
    }
    else {
      currentStreak = 1;
    }

    if(maxStreak < currentStreak) {
      maxStreak = currentStreak;
    }
    prev = current.val;
    current = current.next;
  }
  return maxStreak;
};

console.log(longestStreak(one));