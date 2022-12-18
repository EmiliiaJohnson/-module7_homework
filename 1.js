const objectExample = {
    type: 'cat',
    name: 'Molly',
    age: 4,
};
let object = Object.create(objectExample);
object.name = 'Kelly';
object.age = 6;
function printOwnKeys(objectExample) {
    for (let key in objectExample) {
        if (objectExample.hasOwnProperty(key))
            console.log(`Ключ - ${key}, значение - ${objectExample[key]}`);
    }
}
printOwnKeys(object);

