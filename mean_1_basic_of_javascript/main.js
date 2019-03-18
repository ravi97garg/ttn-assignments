var months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
  var today = new Date();
  var h = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var ampm = "AM";
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getYear();
  var greet = "";

function startTime() {
  var flag = 0;
  today = new Date();
  hour = today.getHours();
  minute = today.getMinutes();
  second = today.getSeconds();
  ampm = "AM";
  minute = checkTime(minute);
  second = checkTime(second);
  var greet = "";
  if (hour>=4 && hour<11) {greet = "Morning";}
  if (hour>=11 && hour<16) {greet = "Afternoon";}
  if (hour>=16 && hour<20) {greet = "Evening";}
  if ((hour>=20 && hour<24) || (hour<4)) {greet = "Night";}
  if (hour>12) {hour-=12; ampm = "PM"}
  hour=checkTime(hour);
  document.getElementById('time').innerHTML = hour + ":" + minute+ ":" + second + " " + ampm;
  if(date != today.getDate()) {date = today.getDate(); flag = 1;}
  if(month != today.getMonth()) {month = today.getMonth(); flag = 1;}
  if(year != today.getYear()) {year = today.getYear(); flag = 1;}
  if(flag == 1){
    document.getElementById('date').innerHTML = date+" "+months[month]+" "+(year+1900);
  }
  document.getElementById('greeting').innerHTML = "Good "+greet;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}