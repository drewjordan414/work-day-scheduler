//global variables
var currentTime = parseInt(dayjs().format("HH:MM"));
console.log(currentTime);
var currentDay = dayjs().format("dddd, MMMM D, YYYY");
console.log(currentDay);

//functions
function clear(isTrue){
  if(isTrue){
    localStorage.clear();
    getSavedItems();
  }
  $('#modal').modal('hide');  
}

//check time
function checkTime(){
  for (i=9; i<18; i++){
    var hour = $("#0" + i);
    if (($(hour).attr('id')) === (0 + currentTime)) {
      hour.addClass('present');
    } else if (Number(($(hour).attr('id'))) < (0 + currentTime)) {
      hour.addClass('past');
    } else {
      hour.addClass('future');
    }
  }
}

// check local storage for saved items
function getSavedItems(){
  for (i = 9; i < 18; i++) {
    var key = '0' + i;
    var info = $('.description');
    $('#0' + i).children(info).val(localStorage.getItem(key));
  }
}

// check if date is stored in local storage and compare to current date
function clearCalOnNewDay() {
  var date = localStorage.getItem('date');
  if(!date) return;
  if (date !== dayjs().format('dddd, MMMM D, YYYY')) { 
    $('#modalLabel').text(currentDate);
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
    localStorage.setItem('date', dayjs().format('dddd, MMMM D, YYYY'));
  });

  // display current time and day 
  $('#currentDay').text(currentDay);

  // call functions
  checkTime();
  setInterval(checkTime, 30000);
  getSavedItems();
  clearCalOnNewDay();
});