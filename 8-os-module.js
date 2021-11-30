// Invoke built in os module
const os = require('os');

// User information
const user = os.userInfo();
// console.log(user);

// CPU information
const cpuInformation = os.cpus(os.CpuInfo);
// console.log(cpuInformation);

// Method returns system uptime in seconds 
console.log(`The system uptime is ${os.uptime()} seconds`);


// Create system information inside a dictionary
const systemInformation = {
    osName: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    processor: cpuInformation,
    userInformation: user,
};

console.log(systemInformation);