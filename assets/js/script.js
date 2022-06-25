/* Get the current date to display in the header */
document.getElementById("currentDay").innerHTML = ("Today is " + moment().format("L"));
var currentHour = parseInt(moment().format('HH'));

/* for every row
if row < current hour, set class=past
else if row = current hour, set class = now
else if row <= current hour +2, set class = soon */
for (let i=9; i<18; i++) {

  /* reset class to default values */
  $("#"+i).css("class", "row time-block");

  if (i < currentHour) {
    $("#"+i).addClass("past");
  } else 
  if (i == currentHour) {
    $("#"+i).addClass("present");   
  } else 
  if (i <= (currentHour + 2)) {
    $("#"+i).addClass("future");
  } 
};

/* When the save button is clicked, save the hour and description to Local */
$(".saveBtn").click(function() {
  var hour = $(this).parent().attr('id');
  var task = $(this).siblings(".description").val();

  localStorage.setItem(hour, task);
});

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