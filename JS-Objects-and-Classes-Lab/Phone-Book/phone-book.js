function collectPhones(input) {
  let phoneBook = {};
  for (let line of input) {
    let tokens = line.split(" ");
    let name = tokens[0];
    let phone = tokens[1];
    phoneBook[name] = phone;
  }

  for (let key in phoneBook) {
    console.log(`${key} -> ${phoneBook[key]}`);
  }
}

collectPhones([
  "Tim 084984563",
  "Peter 084598158",
  "Bill 089846851",
  "Tim 0877989599",
]);
