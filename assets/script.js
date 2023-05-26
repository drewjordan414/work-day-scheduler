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
      var hour = "#h0" + (i-9)
      if (parseInt($(hour).attr("id").substring(2)) + 9 === currentTime / 100) {
        $(hour).addClass("present");
      } else if (parseInt($(hour).attr("id").substring(2)) + 9 < currentTime / 100) {
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