function collectPhones(arr) {
  const phoneObj = arr.reduce((acc, curr) => {
    const [name, phone] = curr.split(" ");
    acc[name] = phone;
    return acc;
  }, {});

  Object.entries(phoneObj).forEach(([key, value]) => {
    console.log(`${key} -> ${value}`);
  });
}

collectPhones([
  "Tim 084984563",
  "Peter 084598158",
  "Bill 089846851",
  "Tim 0877989599",
]);
