// harshdeepsingh3341
var yearText = '<option value="#">Year</option>'
var monthText = '<option value="#">Month</option>'
var dayText = '<option value="#">Day</option>'
for (i=2019; i>1904; i--){
	yearText += "<option value='"+i+"'>"+i+"</option>"
}
document.getElementById('year').innerHTML = yearText;

months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec']
for (i in months){
	monthText += "<option value='"+i+"'>"+i+"</option>"
}
document.getElementById('month').innerHTML = monthText;

for (i=1; i<32; i++){
	dayText += "<option value='"+i+"'>"+i+"</option>"
}
document.getElementById('day').innerHTML = dayText;