function TextBox(id){
	this.renderTo = function(parent){
		var parentId = parent.substr(1,parent.length);
		var parentElem = document.getElementById(parentId);
		var tb = "<input type='text' id='" + id + "'>";
		parentElem.innerHTML = tb;
	}
}