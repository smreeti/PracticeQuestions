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
  
  const getNodeValue = (head, index) => {
      let current = head;
      let count = 0;
      while (current != null) {
          if(count == index) return current.val;
          
          current = current.next;
          count++;
      }
      return null;
  }
  
  console.log(getNodeValue(a, 2)); //return 3
  