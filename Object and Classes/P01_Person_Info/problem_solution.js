function personSetParameters(firstName, lastName, age) {
    const person =  {
        firstName: firstName,
        lastName: lastName,
        age: age
    }
    return person;
}

const personProperties = personSetParameters("Peter", "Pan", "20");
console.log(personProperties);