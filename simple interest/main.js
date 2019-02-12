function output() {
	var a;
	console.log("Hello");
}

function calculateSimpleInterest (principal, rate, time) {
	return (principal*rate*time)/100;
}

function promptInput() {
  var txt;
  var principal = prompt("Principal");
  while (principal == null || principal == "") {
  	principal = prompt("Principal is required");
  }
  var rate = prompt("Rate");
  while (rate == null || rate == "") {
  	rate = prompt("Rate is required");
  }
  var time = prompt("Time");
  while (time == null || time == "") {
  	time = prompt("Time is required");
  }
  var interest = calculateSimpleInterest(principal, rate, time);
  var msg = "Principal: <b>Rs. "+principal+"</b><br/>Rate: <b>"+rate+"%</b><br/>Time: <b>"+time+"years</b><br/><br/>Interest: <b>Rs. "+interest+"</b><br/>Amount: <b>Rs. "+(parseInt(principal,10)+parseInt(interest,10));
  document.getElementById("message").innerHTML = msg;
}