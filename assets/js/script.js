const m = moment();
const eventMoment = moment().add(2, "hours")

console.log(m.format("[Today is] dddd [and we're in] YYYY"));
console.log(m.format("L"));
console.log(eventMoment.toString());


const m2 = moment("2019-02-13");
m2.toJSON = function() {
  return this.format("this is JSON, here is the date:] MM/DD/YYYY");
};