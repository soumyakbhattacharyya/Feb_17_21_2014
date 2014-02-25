window.onload = init;
var citiesArr = [];
function init(){
	loadCountriesFromServer();
	document.getElementById("countries").onchange = loadCities;
}
function loadCountriesFromServer(){
	Acct.ajax({
		url : "countries.jsp",
		success : populateCountriesListbox
	});
}
function populateCountriesListbox(response){
	var jsonObj = JSON.parse(response);
	var options = "<option>Select</option>";
	for(var i=0;i<jsonObj.world.length;i++){
		var country = jsonObj.world[i];
		options += "<option>" + country + "</option>";
	}
	document.getElementById("countries").innerHTML = options;
}

function loadCities(){
	var country = document.getElementById("countries").value;
	if(citiesArr.hasOwnProperty(country)){
		var cities = citiesArr[country];
		populateCitiesListbox(cities);
	}
	else{
		Acct.ajax({
			url : "cities.jsp?country=" + country,
			success : fetchCitiesFromServer
		});
	}
}
function fetchCitiesFromServer(response){
	var jsonObj = JSON.parse(response);
	var country = document.getElementById("countries").value;
	citiesArr[country] = jsonObj.cities;
	populateCitiesListbox(jsonObj.cities);
}

function populateCitiesListbox(cities){
	var options = "<option>Select</option>";
	for(var i=0;i<cities.length;i++){
		var city = cities[i];
		options += "<option>" + city + "</option>";
	}
	document.getElementById("cities").innerHTML = options;		
}


/*
	Create a HTML page called ajaxEx1.html;
	In this page you will send an AJAX request to countries.jsp(I have shared it in GITHUB) when the window loads and display all the countries in a ListBOX.
	DO NOT WRITE CODE IN THE HTML file. CREATE ajaxEx2.js for this purpose;
*/