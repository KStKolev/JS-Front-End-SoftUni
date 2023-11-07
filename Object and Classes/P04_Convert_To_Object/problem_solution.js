function convertJSON_To_JS_Object(JSONText) {
    const personProperties = JSON.parse(JSONText);
    for (const [key, value] of Object.entries(personProperties)) {
        console.log(`${key}: ${value}`);
    }
}

convertJSON_To_JS_Object('{"name": "George", "age": 40, "town": "Sofia"}');