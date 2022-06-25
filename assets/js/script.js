/* Initialize the screen for the user */

var startFunction = function() {
  /* Get the current date to display in the header */
  document.getElementById("currentDay").innerHTML = (moment().format("dddd, MMMM D YYYY"));

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
}

var refreshTimeColors = function() {

  /* Get the current hour */
  var currentHour = parseInt(moment().format('HH'));

  /* Cycle through the work hours */
  for (let i=9; i<18; i++) {

    /* reset class to default values */
    $("#"+i).css("class", "row time-block");

    /* Set past, present, and future hour colors */
    if (i < currentHour) {
      $("#"+i).addClass("past");
    } else 
    if (i == currentHour) {
      $("#"+i).addClass("present");   
    } else {
      $("#"+i).addClass("future");
    } 
  }
};

/* When the save button is clicked, save the hour and description of the row */
$(".saveBtn").click(function() {
  /* retrieve the row id */
  var hour = $(this).parent().attr('id');
  /* retrieve the description in the same row */
  var task = $(this).siblings(".description").val();

  /* Save the row id and description */
  localStorage.setItem(hour, task);
});

/* Start the script */
startFunction();

/* Set the hourly colors based on the time of day */
refreshTimeColors();

// update agenda colors every 5 minutes
setInterval(function() {
  refreshTimeColors();
}
, 300000);


