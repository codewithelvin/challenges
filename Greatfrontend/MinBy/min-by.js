/**
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 */

export default function minBy(array, iteratee) {
    let min;
    let result;
  
    for (let i = 0; i < array.length; i++) {
      const currentValue = iteratee(array[i]);
  
      if (currentValue == null || Number.isNaN(currentValue)) continue;
  
      if (min === undefined || min > currentValue) {
        min = currentValue;
        result = array[i];
      }
    }
  
    return result;
  }