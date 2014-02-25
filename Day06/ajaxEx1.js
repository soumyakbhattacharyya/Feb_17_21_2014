window.onload = init;
var xhr;
var citiesArr = [];
function init(){
	loadCountriesFromServer();
	document.getElementById("countries").onchange = loadCities;
}
function loadCities(){
	var country = document.getElementById("countries").value;
	if(citiesArr.hasOwnProperty(country)){
		var cities = citiesArr[country];
		populateCitiesListbox(cities);
	}
	else{
		var url = "cities.jsp?country=" + country;
		xhr.onreadystatechange = fetchCitiesFromServer;
		xhr.open("GET",url);
		xhr.send();		
	}
}
function fetchCitiesFromServer(){
	if(xhr.readyState == 4){
		var jsonObj = JSON.parse(xhr.responseText);
		var country = document.getElementById("countries").value;
		citiesArr[country] = jsonObj.cities;
		populateCitiesListbox(jsonObj.cities);
	}
}
function populateCitiesListbox(cities){
	var options = "<option>Select</option>";
	for(var i=0;i<cities.length;i++){
		var city = cities[i];
		options += "<option>" + city + "</option>";
	}
	document.getElementById("cities").innerHTML = options;		
}
function loadCountriesFromServer(){
	xhr = new XMLHttpRequest();
	xhr.onreadystatechange = populateCountriesListbox;
	xhr.open("GET","countries.jsp");
	xhr.send();
}
function populateCountriesListbox(){
	if(xhr.readyState == 4){
		var jsonObj = JSON.parse(xhr.responseText);
		var options = "<option>Select</option>";
		for(var i=0;i<jsonObj.world.length;i++){
			var country = jsonObj.world[i];
			options += "<option>" + country + "</option>";
		}
		document.getElementById("countries").innerHTML = options;
	}
}
/*
	Create a HTML page called ajaxEx1.html;
	In this page you will send an AJAX request to countries.jsp(I have shared it in GITHUB) when the window loads and display all the countries in a ListBOX.
	DO NOT WRITE CODE IN THE HTML file. CREATE ajaxEx2.js for this purpose;
*/