window.onload = init;
var table;

function init(){
	document.getElementById("addbutton").onclick = addPerson;
	table = new Table(["Name","Age","Salary"]);
	table.renderTo("#results");
}

function addPerson(){
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var salary = document.getElementById("salary").value;
	table.addRow(name,age,salary);
}