student1 = {
    name : 'John',
    standard: 10,
    roll_no: 56,
    major: 'Arts',
    gender: 'Male',
    age: 17,
}

dic = {
    dict1: {
        dict1_nested: 'this is nested',
    },
}
console.log(JSON.stringify(student1.standard));

console.log(dic.dict1.dict1_nested);