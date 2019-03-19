// Import a module for filtering unique elements in an array.

let cityNames = ['mumbai','delhi','faridabad','mumbai','pune','delhi','delhi','mumbai']
document.getElementById('array').innerText = cityNames;
function filterCities(){
	cityNames = Array.from(new Set(cityNames));
	document.getElementById('array').innerText = cityNames;
}