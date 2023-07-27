//global variables
var currentHour = parseInt(dayjs().format("HH"));
var currentDay = dayjs().format("dddd, MMMM D, YYYY");

//functions
function clearModal(isTrue){
  if(isTrue){
    localStorage.clear();
    getSavedItems();
  }
  $('#modal').modal('hide');  
}

//check time
function checkTime(){
  for (i = 9; i < 18; i++){
    var hourRow = $("#" + ("0" + i).slice(-2)); 
    var hour = parseInt(hourRow.attr('id'));
    if (hour === currentHour) {
      hourRow.addClass('present');
    } else if (hour < currentHour) {
      hourRow.addClass('past');
    } else {
      hourRow.addClass('future');
    }
  }
}

// check local storage for saved items
function getSavedItems(){
  for (i = 9; i < 18; i++) {
    var key = '0' + i;
    var info = $('#' + key + ' .description');
    info.val(localStorage.getItem(key));
  }
}

// check if date is stored in local storage and compare to current date
function clearCalOnNewDay() {
  var date = localStorage.getItem('date');
  if(!date) return;
  if (date !== currentDay) { 
    $('#modalLabel').text(currentDay);
    $('#modal').modal('show');
  }
}

// jquery
$(document).ready(function () {
  $('.saveBtn').on('click', function (event) {
    event.preventDefault();
    var time = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(time, text);
    localStorage.setItem('date', currentDay);
  });

  // display current time and day 
  $('#currentDay').text(currentDay);

  // call functions
  checkTime();
  setInterval(checkTime, 60000);
  getSavedItems();
  clearCalOnNewDay();
});
