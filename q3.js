// Create a new Set
let mySet = new Set();

// Add values to the Set
mySet.add('Apple');
mySet.add('Banana');
mySet.add('Orange');
mySet.add('Apple'); // Adding a duplicate value (which will be ignored)

// Check if a value exists in the Set
console.log(mySet.has('Banana')); // Output: true
console.log(mySet.has('Mango')); // Output: false

// Retrieve the number of values in the Set
console.log('Size:', mySet.size); // Output: 3

// Remove a value from the Set
mySet.delete('Orange');

// Iterate over the Set using for...of loop
console.log('Set Values:');
for (let value of mySet) {
  console.log(value);
}

// Clear all values from the Set
mySet.clear();

// Check if the Set is empty
console.log('Is Set empty:', mySet.size === 0); // Output: true
