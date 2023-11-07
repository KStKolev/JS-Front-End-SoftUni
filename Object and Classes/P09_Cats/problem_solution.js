function getCatProperties(array) {

    class Cat {
        constructor(name, age) {
            this.name = name,
            this.age = age
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    const catObj = array.reduce((acc, curr) => {
        const [name, age] = curr.split(" ");
        acc[name] = age;

        return acc;
    }, {})

    Object.entries(catObj).forEach(pair => {
        const cat = new Cat(pair[0], pair[1]);
        cat.meow();
    });

}

getCatProperties(['Mellow 2', 'Tom 5']);