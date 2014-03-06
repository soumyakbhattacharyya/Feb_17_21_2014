$.fn.temperature = function(city,country){
	var sourceElement = $(this);

	var url = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + 
					country + "&units=metric";
	$.getJSON(url,function(response){
		var min = response.main.temp_min;
		var max = response.main.temp_max;
		var output = city + "(min: " + min + ", max: " + max + ")";
		sourceElement.text(output);
	});
};

$.fn.color = function(value){
	$(this).css("color",value);
};
$.fn.rotate = function(angle){
	$(this).css("-webkit-transform","rotate(" + angle + "deg)");
}
$.fn.toCaps = function(){
	$(this).css("text-transform","uppercase");
	return $(this);
}
$.fn.bold = function(){
	$(this).css("font-weight","bold");
};
$.fn.date = function(){
	$(this).text(new Date());
}