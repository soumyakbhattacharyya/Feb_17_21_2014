var Global = {
	countries : [{city:"Paris",country:"France"},{city:"Pune",country:"India"},{city:"Madrid",country:"Spain"},{city:"Tokyo",country:"Japan"},{city:"Houston",country:"US"}],
	temperaturesTableInstance : null,
	isUpdateTemperature : false,
	prodURL : "http://api.openweathermap.org/data/2.5/weather?q=" + "city" + "," + 
					"country" + "&units=metric",
	cityTemplate : "<li><h1>$city</h1><p>Min: $min, Max: $max</p><p class='ui-li-aside'>$time</p></li>"				
};
function displayTemperatures(){
	$.mobile.loading('show', {
		   text: "Loading...",
		   textVisible: true,
		   theme: "z",
		   html: ""
  	});

	for(var i=0;i< Global.countries.length;i++){
		var country = Global.countries[i].country;
		var city = Global.countries[i].city;
		var url = Global.prodURL.replace("city",city).replace("country",country);
		$.ajax({
			url : url,dataType:"json",
			success : function(jsonObj){
				var max = jsonObj.main.temp_max;
				var min = jsonObj.main.temp_min;
				var time = jsonObj.dt;
				var li = Global.cityTemplate.replace("$city",city)
								   .replace("$max",max)
								   .replace("$min",min)
								   .replace("$time",time);
				$("#citiesul").append(li).listview("refresh");	
				if(i == Global.countries.length)
					$.mobile.loading('hide');			   
			}
		});			
	}

}