function $(expr){
	var id = expr.substring(1);
	var element = document.getElementById(id);
	return {
		click : function(arg){
			element.onclick = arg;
		},
		val : function(){
			return element.value;
		}
	};
}

var Acct = {
	main : function(jsonObj){
		if(jsonObj.hasOwnProperty("launch"))
			window.onload = jsonObj.launch;
	}
};