/*
Write a function, linkedListFind, that takes in the head of a linked list
and a target value. The function should return a boolean indicating whether or not the linked list contains the target
*/

class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  const a = new Node(2);
  const b = new Node(8);
  const c = new Node(3);
  const d = new Node(-1);
  const e = new Node(7);
  
  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;
  
  // 2 -> 8 -> 3 -> -1 -> 7
  
  const linkedListFind = (head, target) => {
    let current = head;
    while (current != null) {
       if(current.val === target){
           return true;
       }
       current = current.next;
    }
    return false;
  }
  
  console.log(linkedListFind(a, 3)); // Output: true
  