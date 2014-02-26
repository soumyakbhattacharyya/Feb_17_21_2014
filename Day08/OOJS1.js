window.onload = init;
function init(){
	document.getElementById("addbutton").onclick = addTextBox;
}
function addTextBox(){
	var tb = new TextBox("firstname");
	tb.renderTo("#section1"); 
}
