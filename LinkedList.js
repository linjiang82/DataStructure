function LinkedList() {
  var length = 0;
  var head = null;
  function Node(element) {
    this.element = element;
    this.next = null;
  }
  this.head = function () {
    return head;
  };
  this.size = function () {
    return length;
  };
  this.add = function (element) {
    let node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      let currentNode = head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    length++;
  };
}
