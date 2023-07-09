// const person = {
//   firstName: "Tony",
//   lastName: "CSKA",
//   age: 31,

//   printNames: function () {
//     console.log(
//       `First Name: ${this.firstName}\nLast Name: ${this.lastName}\nAge: ${this.age}`
//     );
//   },
// };

// person.printNames();

function printCityInfo(city) {
  Object.entries(city).forEach(function (pair) {
    const key = pair[0];
    const value = pair[1];
    console.log(key + " -> " + value);
  });
}

const city = {
  name: "Sofia",
  area: 482,
  population: 1234567,
  postCode: 1000,
  country: "Bulgaria",
};

printCityInfo(city);
