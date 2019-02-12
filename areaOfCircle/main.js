function findArea() {
  radius = parseInt(document.getElementById("radius").value,10);
  document.getElementById('message').innerHTML = "The area of circle with radius <b>"+radius+"</b> is <b>"+(22/7)*radius*radius+"</b>"
}