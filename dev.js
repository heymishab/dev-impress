let count = 0;
function increment() {
    count += 1;
    return count;
}
console.log(increment());  // Output: 1

const numbers = [];
for (let i = 0; i < 3; i++) {
    numbers.push(increment());
}
console.log(numbers);      // Output: [2, 3, 4]
console.log(count);        // Output: 4
