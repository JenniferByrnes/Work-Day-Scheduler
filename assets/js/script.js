/* Delete after dates are done.
*********************
const m = moment();
const eventMoment = moment().add(2, "hours")

console.log(m.format("[Today is] dddd [and we're in] YYYY"));
console.log(m.format("L"));
console.log(eventMoment.toString());


const m2 = moment("2019-02-13");
m2.toJSON = function() {
  return this.format("this is JSON, here is the date:] MM/DD/YYYY");
};
*****************************/
document.getElementById("currentDay").innerHTML = ("Today is " + moment().format("L"));

/* When the save button is clicked, save the hour and description to Local */
$(".saveBtn").click(function() {
  var hour = $(this).parent().attr('id');
  var task = $(this).siblings(".description").val();

  localStorage.setItem(hour, task);
})

/* Retrieves the hour and description from Local on refresh */
$("#9 .description").val(localStorage.getItem(9));
$("#10 .description").val(localStorage.getItem(10));
$("#11 .description").val(localStorage.getItem(11));
$("#12 .description").val(localStorage.getItem(12));
$("#13 .description").val(localStorage.getItem(13));
$("#14 .description").val(localStorage.getItem(14));
$("#15 .description").val(localStorage.getItem(15));
$("#16 .description").val(localStorage.getItem(16));
$("#17 .description").val(localStorage.getItem(17));


/*
  var taskSpan = $("<span>")
  .addClass("badge badge-primary badge-pill")
  .text(taskDate);

    // apply new class if task is near/over due date
    /*
    if (moment().isAfter(time)) {
      $(taskEl).addClass("list-group-item-danger");
    } else if (Math.abs(moment().diff(time, "days")) <= 2) {
      $(taskEl).addClass("list-group-item-warning");
    }
    */