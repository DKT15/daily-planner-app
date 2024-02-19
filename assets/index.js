//Referencing DOM elements
var dateDisplayEl = $("#currentDay");
var currentHour = dayjs().format("h");

function displayDate() {
  var dateNow = dayjs().format("dddd, MMMM D, YYYY h:mm A");
  dateDisplayEl.text(dateNow);
}

$(document).ready(function () {
  displayTimeBlock();
  displayDate();
});

function displayTimeBlock() {
  $(".time__block").each(function () {
    var timeBlock = parseInt($(this).attr("id").split());
    console.log(timeBlock);

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (timeBlock === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else if (timeBlock < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}

console.log(currentHour);
