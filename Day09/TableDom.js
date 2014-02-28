function Table(columns,props){
	var tableElem = init();
	this.updateRow = function(rowId,values){
		var rowToBeUpdated = document.getElementById(rowId);
		var cols = rowToBeUpdated.getElementsByTagName("td");
		for(var i=0;i<cols.length;i++){
			cols[i].innerHTML = values[i];
		}
		rowToBeUpdated.style.backgroundColor = "white";
	}
	this.updateCells = function(rowIndex,values){
		var rows = tableElem.lastChild.getElementsByTagName("tr");
		var rowToBeUpdated = rows[rowIndex];
		rowToBeUpdated.style.backgroundColor = "red";
		var cols = rowToBeUpdated.getElementsByTagName("td");
		for(var i=0;i<cols.length;i++){
			cols[i].innerHTML = values[i];
		}
		rowToBeUpdated.style.backgroundColor = "white";
	},
	this.findRowIndex = function(cellValue){
		var rows = tableElem.lastChild.getElementsByTagName("tr");
		var rowIndex = -1;
		for(var i=0;i<rows.length;i++){
			var columns = rows[i].getElementsByTagName("td");
			var row;
			for(var j=0;j<columns.length;j++){
				if(columns[j].innerHTML.trim() == cellValue){
					row = columns[j].parentNode;
					break;
				}
			}
			if(row){
				rowIndex = i;
				break;
			}
		}
		return rowIndex;
	},
	this.modifyCellValues = function(rowNum,cellValues){
		for(var i=0;i<cellValues.length;i++){
			var text = document.createTextNode(cellValues[i]);
			var col = document.createElement("td");
			col.appendChild(text);
			row.appendChild(col);
		}
	};
	this.addRow = function(cellValues,rowId){
		var row = document.createElement("tr");
		row.setAttribute("id",rowId);
		for(var i=0;i<cellValues.length;i++){
			var text = document.createTextNode(cellValues[i]);
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
		for(var prop in props){
			table.setAttribute(prop,props[prop]);
		}
		thead.appendChild(tr);
		table.appendChild(thead);
		table.appendChild(document.createElement("tbody"));
		return table;
	}
}