function checkPalindrome() {
  var string = document.getElementById("string").value;
  var ignoreCase = document.getElementById("ignore");
  if(ignoreCase.checked == true) {
    string = string.toLowerCase();
  }
  if(reverseString(string) == string) {
    msg = "<b>"+string+"</b> is palindrome";
  } else {
    msg = "<b>"+string+"</b> is not palindrome";
  }
  document.getElementById("message").innerHTML = msg;
}

function reverseString(string) {
  var reversedStr = new String;
  for (i=string.length-1; i>-1; i--) {
    reversedStr += string[i];
  }
  return reversedStr;
}