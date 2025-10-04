export default class Stack {
    #stack;
    #size;

  constructor() {
    this.#stack = [];
    this.#size  = 0;
  }

  /**
   * Pushes an item onto the top of the stack.
   * @param {*} item The item to be pushed onto the stack.
   * @return {number} The new length of the stack.
   */
  push(item) {
    this.#stack[this.#size++] = item;
    return this.length();
  }

  /**
   * Remove an item at the top of the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  pop() {
    if(this.isEmpty()) return undefined;
    const popedItem = this.peek();
    this.#stack.length = this.#size - 1;
    this.#size--;
    return popedItem
  }

  /**
   * Determines if the stack is empty.
   * @return {boolean} `true` if the stack has no items, `false` otherwise.
   */
  isEmpty() {
    return this.#size === 0;
  }

  /**
   * Returns the item at the top of the stack without removing it from the stack.
   * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
   */
  peek() {
    return this.#stack[this.#size - 1];
  }

  /**
   * Returns the number of items in the stack.
   * @return {number} The number of items in the stack.
   */
  length() {
    return this.#size;
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true
console.log(stack.push(33)); // 1
console.log(stack.push(44)); // 2
console.log("length =>", stack.length()); // 2
console.log(stack.push(55)); // 3
console.log("peek =>", stack.peek()); // 55
console.log(stack.pop()); // 55
console.log("length =>", stack.length()); //2
console.log(stack.pop()); // 44
console.log(stack.pop()); // 33
console.log("length =>", stack.length()); // 0
console.log(stack.isEmpty()); // true
