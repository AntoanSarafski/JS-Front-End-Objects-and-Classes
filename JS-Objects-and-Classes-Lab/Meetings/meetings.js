function schedule(input) {
  let meetings = {};
  for (let line of input) {
    let [weekday, name] = line.split(" ");

    if (meetings.hasOwnProperty(weekday)) {
      console.log(`Conflict on ${weekday}`);
    } else {
      meetings[weekday] = name;
      console.log(`Shedule for ${weekday}`);
    }
  }
}

schedule(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
