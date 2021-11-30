// Javascript first runs synchronous functions and offloads async functions


setInterval(() => {
    console.log("Hello World")
}, 2000);

// This will first execute as setInterval is a asynchronous function
console.log("I will run first"); 