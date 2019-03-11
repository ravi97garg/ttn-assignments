function startTime() {
  var months = ['Jan','Feb','Mar','Apr','May','June','Jul','Aug','Sept','Oct','Nov','Dec'];
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var ampm = "AM";
  var date = today.getDate();
  var month = today.getMonth();
  var year = today.getYear();
  m = checkTime(m);
  s = checkTime(s);
  var greet = "";
  if (h>=4 && h<11) {greet = "Morning";}
  if (h>=11 && h<16) {greet = "Afternoon";}
  if (h>=16 && h<20) {greet = "Evening";}
  if ((h>=20 && h<24) || (h<4)) {greet = "Night";}
  if (h>12) {h-=12; ampm = "PM"}
  h=checkTime(h);
  document.getElementById('time').innerHTML = h + ":" + m+ ":" + s + " " + ampm;
  document.getElementById('date').innerHTML = date+" "+months[month]+" "+(year+1900);
  document.getElementById('greeting').innerHTML = "Good "+greet;
  var t = setTimeout(startTime, 1000);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}