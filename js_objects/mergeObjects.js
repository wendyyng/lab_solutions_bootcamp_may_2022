function merge(obj1, obj2) {
    let return_object = {};
    for (const property in obj1) {
        return_object[property] = obj1[property];
    }

    for (const property in obj2) {
        return_object[property] = obj2[property];
    }
    return return_object;
}

console.log(merge({ a: 1, b: 2 }, { c: 3, d: 4 }));

console.log(merge({ firstName: 'Ron', lastName: 'Wesley', occupation: 'Wizard' }, { firstName: 'Harry', lastName: 'Potter' }
));