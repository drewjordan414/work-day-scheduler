//global variables
var currentTime = parseInt(dayjs().format("HH:MM"));
console.log(currentTime);
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
console.log(currentDay);

//functions
$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    localStorage.setItem(time, text);
  });
  function timeCheck() {
    for (i = 9; i < 18; i++) {
      var hour = $("#h00" + i).attr("id");
      if ($(hour).attr("id") === (0 + currentTime)) {
        $(hour).addClass("present");
      } else if (Number(($(hour).attr("id"))) < (0 + currentTime)) {
        $(hour).addClass("past");
      } else {
        $(hour).addClass("future");
      }
    }   
  }
  function savedItems(){
    for (i = 9; i < 18; i++) {
      var key = $("#h00" + i).attr("id");
      var savedText = $(".description")
      $("#h00" + i ).children(savedText).val(localStorage.getItem(key));
    }
  }
  $("#currentDay").text(currentDay);
  timeCheck();
  savedItems();
  savedItems();


});