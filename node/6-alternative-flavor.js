module.exports.items = ['item1', 'item-2'];

const person = {
    name: 'bob',
};

// Export module with property singlePerson
// You can just randomly name property

module.exports.singlePerson = person; //This is same as module.exports = person; Here singlePerson is just a property.

// Output will be: { singlePerson: { name: 'bob' } }
