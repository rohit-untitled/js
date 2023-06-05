// Create a new Map
let myMap = new Map();

// Add key-value pairs to the Map
myMap.set('name', 'John Doe');
myMap.set('age', 30);
myMap.set('city', 'New York');

// Retrieve a value from the Map using a key
console.log('Name:', myMap.get('name')); // Output: John Doe
console.log('Age:', myMap.get('age')); // Output: 30
console.log('Country:', myMap.get('country')); // Output: undefined (key not found)

// Check if a key exists in the Map
console.log(myMap.has('city')); // Output: true
console.log(myMap.has('country')); // Output: false

// Retrieve the number of key-value pairs in the Map
console.log('Size:', myMap.size); // Output: 3

// Remove a key-value pair from the Map
myMap.delete('age');

// Iterate over the Map using for...of loop
console.log('Map Entries:');
for (let [key, value] of myMap) {
  console.log(key + ':', value);
}

// Clear all key-value pairs from the Map
myMap.clear();

// Check if the Map is empty
console.log('Is Map empty:', myMap.size === 0); // Output: true
