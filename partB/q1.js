// Using Map
let map = new Map();
map.set("name", "John");
map.set("age", 25);

console.log(map.get("name")); // Output: John
console.log(map.size); // Output: 2
console.log(map.has("age")); // Output: true

// Using Object
let obj = {};
obj.name = "John";
obj.age = 25;

console.log(obj.name); // Output: John
console.log(Object.keys(obj).length); // Output: 2
console.log("age" in obj); // Output: true

