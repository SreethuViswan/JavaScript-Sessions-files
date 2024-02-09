let r  = 12;
let s = 13;

setTimeout(function() {
    console.log("async with time delay of 1000ms");
}, 1000);


setTimeout(function() {
    console.log("async with time delay of 100ms");
}, 100);

console.log("synchronous");
console.log(r);
console.log(s);
