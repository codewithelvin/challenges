/**
 * @param {any} thisArg
 * @param {...*} argArray
 * @return {any}
 */
Function.prototype.myCall = function (thisArg, ...argArray) {
  // Handle null/undefined
  thisArg = thisArg ?? globalThis;

  // Use a unique key to avoid overwriting existing props
  const fnKey = Symbol();

  // Attach the function temporarily
  thisArg[fnKey] = this;

  // Call it with correct context and arguments
  const result = thisArg[fnKey](...argArray);

  // Clean up
  delete thisArg[fnKey];

  return result;
};


  const person = {
    name: 'John',
  };

  function getName() {
    return this.name;
  }

    function greeting(prefix, message) {
    return `${prefix} ${this.name}, ${message}`;
  }

console.log(getName.myCall(person))
console.log(greeting.myCall(person, 'Hello', 'how are you?'))