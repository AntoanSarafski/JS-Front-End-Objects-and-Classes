function schedule(input) {
  const schedule = input.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");

    if (acc.hasOwnProperty(day)) {
      console.log(`Conflict for ${day}`);
    } else {
      acc[day] = name;
      console.log(`Schedule for ${day}`);
    }

    return acc;
  }, {});

  console.log(schedule);
}

schedule(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
