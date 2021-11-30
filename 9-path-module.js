// Invoke built in path module
const path = require('path');

// To check platform specific separator
console.log(path.sep)

// File Path
const filePath = path.join('/content/', 'subfolder', 'test.txt');
const filePath_sytle_2 = path.join('/content', 'subfolder', 'test.txt');
console.log(filePath);
console.log(filePath_sytle_2)

// Return last file or directory
const base = path.basename(filePath);
console.log(base);

// Return absolute path(full path)
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);