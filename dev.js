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


function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
const total = sumArray(numbers);
console.log(`Sum: ${total}`);           // Output: Sum: 9
console.log(`Average: ${total/3}`);     // Output: Average: 3

console.log(count);                     // Output: 0
console.log(numbers);                   // Output: []
increment();
console.log(numbers.push(count));       // Output: 1
console.log(`Final state: ${count}`);   // Output: Final state: 1
