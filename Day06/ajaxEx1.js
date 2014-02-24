window.onload = loadCountriesFromServer;
var xhr;
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