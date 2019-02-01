class Node {
  constructor(val) {
    this.value = val
    this.next = null
  }
}

export default class LinkedList {
  constructor() {
    this.head = null
    this._length = 0
  }
  add(val) {
    const node = new Node(val)
    let curNode = this.head
    if (!curNode) {
      this.head = node
      this._length++
      return node
    }
    while (curNode.next) {
      curNode = curNode.next
    }
    curNode.next = node
    this._length++
    return node
  }
  searchNodeAt(position) {
    let curNode = this.head
    const length = this._length
    let count = 1
    const message = { failure: 'Failure: non-existent node in this list.' }
    if (length === 0 || position < 1 || position > length) {
      throw new Error(message.failure)
    }
    while (count < position) {
      curNode = curNode.next
      count++
    }
    return curNode
  }
  remove(position) {
    let curNode = this.head
    const length = this._length
    let beforeNodeToDelete = null
    let nodeToDelete = null
    let deletedNode = null
    const message = { failure: 'Failure: non-existent node in this list.' }
    if (this.length === 0 || position < 1 || position > length) {
      throw new Error(message.failure)
    }

    if (this.length === 1) {
      this.head = curNode.next
      nodeToDelete = curNode
      this._length--
      curNode = null
      return nodeToDelete
    }
    let count = 0
    while (count < position) {
      beforeNodeToDelete = curNode
      nodeToDelete = curNode.next
      count++
    }
    beforeNodeToDelete.next = nodeToDelete.next
    deletedNode = nodeToDelete
    nodeToDelete = null
    this._length--
    return deletedNode
  }
}
