var Acct = {
	ajax : function(jsonObj){
		var url = jsonObj.url;
		var success = jsonObj.success;
		var xhr = new XMLHttpRequest();
		xhr.open("GET",url,true);
		xhr.onerror = function(){
			
		};
		xhr.onreadystatechange = function(){
			
			if(xhr.readyState == 4){
				success(xhr.responseText);	
			}
		};
		xhr.send();
	}
};