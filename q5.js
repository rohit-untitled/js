let myArray = [1, 2, 3, 4, 5];

// Insert an element at a specific index
function insertElement(array, index, element) {
  array.splice(index, 0, element);
}

// Remove an element at a specific index
function removeElement(array, index) {
  array.splice(index, 1);
}

console.log('Original Array:', myArray);

// Insert an element at index 2
insertElement(myArray, 2, 6);
console.log('After Insertion:', myArray); // Output: [1, 2, 6, 3, 4, 5]

// Remove the element at index 4
removeElement(myArray, 4);
console.log('After Removal:', myArray); // Output: [1, 2, 6, 3, 5]
