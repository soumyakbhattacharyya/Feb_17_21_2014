window.onload = init;

/////////////////////////
// All global variables
////////////////////////
var Global = {
	countries : [],
	countriesInJSON : [],
	temperaturesTableInstance : null,
	isUpdateTemperature : false,
	prodURL : "http://api.openweathermap.org/data/2.5/weather?q=" + "city" + "," + 
					"country" + "&units=metric&callback=test",
	devURL : "weather.jsp?q=city,country"				
};


function init(){
	Global.temperaturesTableInstance = new Table(["Country","City","Max","Min","Time"],{
		border : "1",
		cellspacing : 2,
		cellpadding : 15
	});
	Global.temperaturesTableInstance.renderTo("#temperatures");
	initializeCountriesArray();
	displayTemperatures();
	window.setInterval("update()",4000);
}
function displayTemperatures(){
	for(var item in Global.countries){
		var country = item;
		var city = Global.countries[item];
		var url = Global.prodURL.replace("city",city).replace("country",country);
		Acct.ajax({
			url : url,
			success : function(response){
				eval(response);
			}
		});			
	}
}
function constructCountriesInJSON(){
	for(var item in Global.countries){
		Global.countriesInJSON.push({country:item,city:Global.countries[item]});
	}
}

function getNextParams(){
	if(Global.countriesInJSON.length != 0)
		return Global.countriesInJSON.pop();
}
function updateTemperaturesSeq(){
	var params = getNextParams();
	if(params){
		var city = params.city;
		var country = params.country;
		var url = Global.prodURL.replace("city",city).replace("country",country);
		document.getElementById(city).style.backgroundColor = "red";
		Acct.ajax({
				url : url,
				success : function(response){
					eval(response);
					updateTemperaturesSeq();
				}
			});	
	}
}
function updateTemperatures(){
	for(var item in Global.countries){
		var country = item;
		var city = Global.countries[item];
		//var url = "weather.jsp?q=" + city + "," + country;
		var url = Global.URL.replace("city",city).replace("country",country);
		document.getElementById(city).style.backgroundColor = "red";
		Acct.ajax({
			url : url,
			success : function(response){
				eval(response);
			}
		});			
	}
}
function update(){
	Global.isUpdateTemperature = true;
	constructCountriesInJSON();
	updateTemperaturesSeq();
}

function test(jsonObj){
	if(Global.isUpdateTemperature){
		var city = jsonObj.name;
		var values = [jsonObj.sys.country,
				jsonObj.name,
				jsonObj.main.temp_max,
				jsonObj.main.temp_min,
				jsonObj.dt];
		Global.temperaturesTableInstance.updateRow(city,values);
	}
	else{
		var values = [jsonObj.sys.country,
				jsonObj.name,
				jsonObj.main.temp_max,
				jsonObj.main.temp_min,
				jsonObj.dt];
				console.log(values[1]);
		Global.temperaturesTableInstance.addRow(values,jsonObj.name);				
	}
}
function initializeCountriesArray(){
	Global.countries["India"] = "New Delhi";
	Global.countries["UK"] = "London";
	Global.countries["Spain"] = "Madrid";
	Global.countries["France"] = "Paris";
	Global.countries["Japan"] = "Tokyo";
}