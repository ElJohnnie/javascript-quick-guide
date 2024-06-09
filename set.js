let set = new Set([1, 2, 3, 3, 4]);
console.log(set); // Set { 1, 2, 3, 4 }
set.add(5);
console.log(set.has(5)); // true
