// Performance test
const iterations = 1000000;

let set = new Set();
for (let i = 0; i < iterations; i++) {
  set.add(i);
}

console.time("Set");
console.log(set.has(iterations - 1));
console.timeEnd("Set");

let array = Array.from(set);

console.time("Array");
console.log(array.includes(iterations - 1));
console.timeEnd("Array");
