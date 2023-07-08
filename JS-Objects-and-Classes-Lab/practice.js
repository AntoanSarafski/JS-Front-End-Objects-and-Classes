const person = {
  firstName: "Tony",
  lastName: "CSKA",
  age: 31,

  printNames: function () {
    console.log(
      `First Name: ${person.firstName}\nLast Name: ${person.lastName}\nAge: ${person.age}`
    );
  },
};

person.printNames();
