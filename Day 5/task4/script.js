let a = 5;
let b = 10;
console.log("before");
console.log(a);
console.log(b);

[a, b] = [b, a];

console.log("after")
console.log(a);
console.log(b); 
