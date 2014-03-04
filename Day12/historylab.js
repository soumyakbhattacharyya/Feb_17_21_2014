var Global = {
	prodURL : "http://api.openweathermap.org/data/2.5/weather?q=" + "city" + "," + 
					"country" + "&units=metric&callback=test"
};

window.onload = init;

function init(){
	document.getElementById("gettempbutton").onclick = getTemperature;
	window.onpopstate = restoreStateFromHistory;
}
function restoreStateFromHistory(e){
	var data = e.state;
	if(data){
		document.getElementById("city").value = data.city;
		document.getElementById("country").value = data.country;
		document.getElementById("maxtemp").innerHTML = "Max: " + data.max;
		document.getElementById("mintemp").innerHTML = "Min: " + data.min;
	}
	else{
		document.getElementById("city").value = "";
		document.getElementById("country").value = "";
		document.getElementById("maxtemp").innerHTML = "";
		document.getElementById("mintemp").innerHTML = "";	
	}
}
function addToHistory(country,city,max,min){
	var data = {
		country : country, city : city, max : max, min : min
	};
	var url = location.pathname + "#" + city + "/" + country;
	window.history.pushState(data,"",url);
}
function test(response){
	var country = response.sys.country;
	var city = response.name;
	var max = response.main.temp_max;
	var min = response.main.temp_min;
	document.getElementById("maxtemp").innerHTML = "Max: " + max;
	document.getElementById("mintemp").innerHTML = "Min: " + min;
	addToHistory(country,city,max,min);
}
function getTemperature(){
	var city = document.getElementById("city").value;
	var country = document.getElementById("country").value;
	var url = Global.prodURL.replace("city",city).replace("country",country);
	var xhr = new XMLHttpRequest();
	xhr.open("GET",url);
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			eval(xhr.responseText);
		}
	};
	xhr.send();	
}