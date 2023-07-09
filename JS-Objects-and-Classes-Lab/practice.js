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
  for (const key in city) {
    console.log(key + " -> " + city[key]);
  }
}

const city = {
  name: "Sofia",
  area: 482,
  population: 1234567,
  postCode: 1000,
  country: "Bulgaria",
};

printCityInfo(city);
