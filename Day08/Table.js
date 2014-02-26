function Table(columns){
	var tableHtml = init();
	
	this.addRow = function(name,age,salary){
		var row = "<tr>";
		row += "<td>" + name + "</td>";
		row += "<td>" + age + "</td>";
		row += "<td>" + salary + "</td>";
		row += "</tr>";
		document.getElementById("persontbody").innerHTML += row;
	}
	this.renderTo = function(parent){
		var parentId = parent.substr(1,parent.length);
		var parentElem = document.getElementById(parentId);
		parentElem.innerHTML = tableHtml;
	}
	function init(){
		var table = "<table border='1'>";
		table += "<thead>";
		table += "<tr>";
		for(var i=0;i<columns.length;i++){
			table += "<th>" + columns[i] + "</th>";
		}
		table += "</tr>";
		table += "</thead>";
		table += "<tbody id='persontbody'>";
		table += "</tbody>";
		table += "</table>";
		return table;
	}
}