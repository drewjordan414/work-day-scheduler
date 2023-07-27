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

function getSavedItems(){
  for (i = 9; i < 18; i++) {
    var key = '0' + i;
    var info = $('.description');
    $('#0' + i).children(info).val(localStorage.getItem(key));
  }
}

