var mybox1;
window.onload = function(){
	document.getElementById("xrange").onchange = rotateXRange;
	document.getElementById("yrange").onchange = rotateYRange;
	document.getElementById("skewrange").onchange = skewRange;
	mybox1 = document.getElementById("mybox1");
}
function rotateXRange(){
	var degree = document.getElementById("xrange").value;
	mybox1.style.webkitTransform = "rotateX(" + degree  + "deg)";
}
function rotateYRange(){
	var degree = document.getElementById("yrange").value;
	mybox1.style.webkitTransform = "rotateY(" + degree  + "deg)";
}
function skewRange(){
	var degree = document.getElementById("skewrange").value;
	mybox1.style.webkitTransform = "skew(" + degree  + "deg)";
}