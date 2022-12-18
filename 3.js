function emptyObject () {
    return Object.create(null);
}

const obj = emptyObject();
console.log(Object.getPrototypeOf(obj));