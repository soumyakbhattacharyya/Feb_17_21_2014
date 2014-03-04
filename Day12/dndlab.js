window.onload = init;
var Global = {
	numbersInDropZone : []
};
function init(){
	constructNumbersList();
	document.getElementById("sumbutton").onclick = add;
	document.getElementById("productbutton").onclick = multiply;
	document.getElementById("resetbutton").onclick = resetDropZone;
	document.getElementById("dropzone").ondrop = number_drop;
	document.getElementById("dropzone").ondragover = number_dragover;
}
function add(){
	var sum = 0;
	for(var i=0;i<Global.numbersInDropZone.length;i++){
		sum += parseInt(Global.numbersInDropZone[i]);
	}
	document.getElementById("sum").innerHTML = "SUM: " + sum;
}
function multiply(){
	var product = 1;
	for(var i=0;i<Global.numbersInDropZone.length;i++){
		product *= parseInt(Global.numbersInDropZone[i]);
	}
	document.getElementById("product").innerHTML = "Product: " + product;
}
function resetDropZone(){
	document.getElementById("dropzone").innerHTML = "";
	Global.numbersInDropZone = [];
	document.getElementById("sum").innerHTML = "";
	document.getElementById("product").innerHTML = "";
}
function number_drop(e){
	var num = e.dataTransfer.getData("num");
	var dropZone = document.getElementById("dropzone");
	dropZone.innerHTML = "";
	Global.numbersInDropZone.push(num);
	for(var i=0;i<Global.numbersInDropZone.length;i++){
		dropZone.innerHTML += Global.numbersInDropZone[i] + "<br/>";
	}
}
function number_dragover(e){
	e.preventDefault();
}
function number_dragstart(e){
	if(e.srcElement.innerHTML != undefined)
		e.dataTransfer.setData("num",e.srcElement.innerHTML);
}

function constructNumbersList(){
	var numbersul = document.getElementById("numbers");
	for(var i=1;i<10;i++){
		var li = document.createElement("li");
		li.innerHTML = i;
		li.setAttribute("draggable",true);
		li.ondragstart = number_dragstart;
		numbersul.appendChild(li);
	}
}