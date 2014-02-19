function buttonClicked(){
	alert("Clicked the button");
}
function init(){
	document.getElementById("clickbutton").onclick = buttonClicked;
}
window.onload = init;