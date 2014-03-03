var mapElement;

function displayMap(){
	navigator.geolocation.getCurrentPosition(function(position){
		var lat = position.coords.latitude;
		var lng = position.coords.longitude;
		var coords = new google.maps.LatLng(lat,lng);
		var myOptions = {
	      zoom: 20, center: coords,
	      mapTypeId: google.maps.MapTypeId.ROADMAP
	    };
	    var googleMap = new google.maps.Map(mapElement,myOptions);
	    var marker = new google.maps.Marker({
	        position: coords, 
	        map: googleMap, 
	        title:"You're here"
	    });
	});
}	

var GoogleMapDisplay = function(mapElementId){
	var url = "http://maps.googleapis.com/maps/api/js?sensor=true&callback=displayMap"
	var script = document.createElement("script");
	script.setAttribute("src",url);
	document.head.appendChild(script);
	mapElement = document.getElementById(mapElementId.substr(1));	
}