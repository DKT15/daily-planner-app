//Referencing DOM elements
var dateDisplayEl = $("#currentDay");

//Pulls the current hour from Day Js.
var currentHour = dayjs().format("H");

// This displays the current date and time at the top of the page.
function displayDate() {
  var dateNow = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  dateDisplayEl.text(dateNow);
}

// Displays when the page loads.
$(document).ready(function () {
  displayTimeBlock();
  displayDate();
});

//Passing the time in and looping through each one.
function displayTimeBlock() {
  $(".time__block").each(function () {
    var timeBlock = parseInt($(this).attr("id"));
    console.log(timeBlock);

    //Checking to see if the time is past, present, or future.
    if (currentHour == timeBlock) {
      $(this).addClass("present");
      $(this).removeClass("past");
      $(this).removeClass("future");
    } else if (currentHour > timeBlock) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
      $(this).addClass("future");
      $(this).removeClass("present");
      $(this).removeClass("past");
    }
  });
}

// Saving items via local storage, when the save button is clicked
$(".save__btn").on("click", function () {
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, text);
});

//Getting the items that were saved on the local storage.
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));
