var name = 'Carlos Santana';
let age = 30;

console.log(window.name); // Carlos Santana
console.log(window.age);  // undefined

for (var i = 1; i <= 10; i++) {
    console.log(i); // 1, 2, 3, 4... 10
}

console.log(i); // Will print the last value of i: 10
