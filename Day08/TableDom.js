function Table(columns){
	var tableElem = init();
	
	this.addRow = function(name,age,salary){
		var row = document.createElement("tr");
		for(var i=0;i<arguments.length;i++){
			var text = document.createTextNode(arguments[i]);
			var col = document.createElement("td");
			col.appendChild(text);
			row.appendChild(col);
		}
		tableElem.lastChild.appendChild(row);
	}
	this.renderTo = function(parent){
		var parentId = parent.substr(1,parent.length);
		var parentElem = document.getElementById(parentId);
		parentElem.appendChild(tableElem);
	}
	function init(){
		var table = document.createElement("table");
		table.setAttribute("border","1");
		var thead = document.createElement("thead");
		var tr = document.createElement("tr");

		for(var i=0;i<columns.length;i++){
			var header = document.createTextNode(columns[i]);
			var col = document.createElement("th");
			col.appendChild(header);
			tr.appendChild(col);
		}
		thead.appendChild(tr);
		table.appendChild(thead);
		table.appendChild(document.createElement("tbody"));
		return table;
	}
}