// Using Set
let set = new Set();
set.add(1);
set.add(2);
set.add(3);
set.add(2); // Ignored, already present

console.log(set.has(2)); // Output: true
console.log(set.size); // Output: 3

// Using Array
let array = [1, 2, 3, 2]; // Duplicate value allowed

console.log(array.includes(2)); // Output: true
console.log(array.length); // Output: 4
