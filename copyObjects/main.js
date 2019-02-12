function copyObjects() {
  input = document.getElementById('source').value;
  try {
    source = JSON.parse(input);
    target = {};
    for (property in source) {
      target[property] = source[property];
    }
    console.log("Source Object: "+JSON.stringify(source));
    console.log("Target Object: "+JSON.stringify(target));
    document.getElementById('message').innerHTML = "Copied Successfully!<br/>Source Object<br/><b>"+JSON.stringify(source)+"</b><br/>Target Object<br/><b>"+JSON.stringify(target)+"</b>";
    document.getElementById('target').value = JSON.stringify(target);
  } catch(e) {
    alert("Enter a Valid JSON");
  }
}