// var MyLinkedList = function() {
//     this.val = undefined;
//     this.next = null;
// };

// /**
//  * @param {number} index
//  * @return {number}
//  */
// MyLinkedList.prototype.get = function(index) {
//     let next = this.next;
//     let val = this.val;
//     let iterator = 0;
//     while (next!=null) {
//         let node = next;
//         val = node.val;
//         next = node.next;
//         if (iterator === index) {
//             break;
//         }

//         iterator++
//     }

//     return val;
// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtHead = function(val) {

// };

// /**
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtTail = function(val) {

// };

// /**
//  * @param {number} index
//  * @param {number} val
//  * @return {void}
//  */
// MyLinkedList.prototype.addAtIndex = function(index, val) {

// };

// /**
//  * @param {number} index
//  * @return {void}
//  */
// MyLinkedList.prototype.deleteAtIndex = function(index) {

// };

//  Class implementation

class Node {
  constructor(val = undefined, next = null) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  get(index) {
    if (index >= this.size) return -1;
    let next = this.head;
    let val = -1;
    let iterator = 0;

    while (next !== null) {
      if (iterator > index) {
        break;
      }

      val = next.val;
      next = next.next;
      iterator++;
    }

    return val;
  }

  addAtHead(val) {
    const node = new Node(val);
    node.next = this.head;
    this.head = node;
    this.size = this.size + 1;
  }

  addAtTail(val) {
    const node = new Node(val);
    let tail = this.head;
    if (!tail) {
      this.head  = node;
      this.size++;
      return;
    } 
    while (tail.next !== null) {
      tail = tail.next;
    }

    tail.next = node;
    this.size++;

  }

  addAtIndex(index, val) {
    if(index === 0) {
      return this.addAtHead(val);
    }
    const node = new Node(val);
    let front = this.head;
    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        const next = front.next;
        front.next = node;
        node.next = next;
        this.size++;
        break;
      }

      front = front.next;
    }
  }

 deleteAtIndex(index) {
    let prev = this.head;
    if (index === 0 && prev) {
      this.head = prev.next;
      return;
    }
    for (let i = 0; i < this.size; i++) {
      if (i === index - 1) {
        const node = prev.next;
        if (node) {
            const nextNode = node.next;
            node.next = null;
            prev.next = nextNode;
            this.size--;
            break;
        }
      }

      prev = prev.next;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * */
var obj = new MyLinkedList();
obj.addAtHead(1);
obj.addAtTail(3);
obj.addAtIndex(1, 2);
console.log(obj.get(1));
obj.deleteAtIndex(1);


console.log(JSON.stringify(obj));
