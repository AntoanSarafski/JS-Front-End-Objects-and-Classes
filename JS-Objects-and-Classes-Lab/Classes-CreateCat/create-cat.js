class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    meow() {
        console.log(`Name: ${this.name}, Age: ${this.age} says meow.`);
    }
}


function createCats(input) {
    input.forEach((line) => {
        const [name, age] = line.split(" ");
        console.log(`Name: ${name}, Age: ${age}`);
        const cat = new Cat(name, age);
        console.log(cat)
        cat.meow();
    });
}

createCats(["Mellow 2" , "Tom 5"]);