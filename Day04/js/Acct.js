var Acct = {
	main : function(jsonObj){
		if(jsonObj.hasOwnProperty("launch"))
			window.onload = jsonObj.launch;
	}
};