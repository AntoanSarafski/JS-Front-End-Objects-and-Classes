class Cat {
constructor(name, age) {
    this.name = name;
    this.age = age;
}
}

function createCats(input) {
    input.forEach((line) => {
        const [name, age] = line.split(" ");
        console.log(name, age);
        const cat = new Cat(name, age);
    });
}



createCats(["Mellow 2" , "Tom 5"]);