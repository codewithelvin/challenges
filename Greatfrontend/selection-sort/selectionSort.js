/**
 * @param {Array<number>} arr The input integer array to be sorted.
 * @return {Array<number>}
 */

export default function selectionSort(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
        if(arr[lowest] > arr[j]) {
            lowest = j;
        }
    }
    if(lowest !== i) {
        [arr[lowest], arr[i]] = [arr[i], arr[lowest]]
    }
  }

  return arr;
}

// console.log(selectionSort([9, 3, 6, 2, 1, 11])); // [1, 2, 3, 6, 9, 11]
// console.log(selectionSort([12, 16, 14, 1, 2, 3])); // [1, 2, 3, 12, 14, 16])