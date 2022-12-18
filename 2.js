function findKey (obj, objKey) {
    return (objKey in obj)
}

const objectExample = {
    animal: 'cat',
    name: 'Kelly',
    age: 6,
};

console.log(findKey(objectExample, 'animal'));
console.log(findKey(objectExample, 'age'));
console.log(findKey(objectExample, 'height'));
