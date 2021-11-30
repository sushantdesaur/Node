const os = require('os');

const info = os.cpus();

const cpuModel = `Your cpu model is ${info[0].model}`

const cpuSpeed = `CPU speed is : ${info[0].speed}`;

console.log(info[0].times.user); // Nested dict
console.log(cpuSpeed); // Display only CPU Speed
console.log(cpuModel); // Display only CPU Model