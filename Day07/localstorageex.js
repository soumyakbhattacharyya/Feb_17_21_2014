window.onload = init;

function loadControlValuesFromLocalStorage(){
	document.getElementById("volume").value = localStorage.getItem("volume");
	document.getElementById("color").value = localStorage.getItem("color");
	document.getElementById("brightness").value = localStorage.getItem("brightness");
}
function init(){
	loadControlValuesFromLocalStorage();
	document.getElementById("volume").onchange = changeVolume;
	document.getElementById("color").onchange = changeColor;
	document.getElementById("brightness").onchange = changeBrightness;
}
function changeVolume(){
	localStorage.setItem("volume",document.getElementById("volume").value);
}
function changeColor(){
	localStorage.setItem("color",document.getElementById("color").value);
}
function changeBrightness(){
	localStorage.setItem("brightness",document.getElementById("brightness").value);
}