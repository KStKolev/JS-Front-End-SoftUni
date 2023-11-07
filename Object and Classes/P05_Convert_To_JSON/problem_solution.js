function convertObjectToJSON(name, lastName, hairColor) {
    const personProperties = {
        name,
        lastName,
        hairColor
    }
    const JSONText = JSON.stringify(personProperties);
    console.log(JSONText);
}

convertObjectToJSON('George', 'Jones','Brown');