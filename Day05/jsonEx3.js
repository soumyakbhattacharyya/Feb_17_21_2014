function $(arg){
	arg();
}
$(function(){
	console.log("Hello World");
});

var Acc = {
	main : function(jsonObj){
		if(jsonObj.hasOwnProperty("launch"))
			jsonObj.launch();
	}
};

Acc.main({
	launch : function(){
		console.log("Hello World");
	}
});

