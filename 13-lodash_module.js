const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

// Show nested array in single array
const newItems = _.flattenDeep(items); 
console.log(newItems);