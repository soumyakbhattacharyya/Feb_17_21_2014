//id="name"
//$("#name").val()
//$("#name").val("some value");

function work(){
	console.log("*****Working");
	if(arguments.length == 0)
		console.log("I don't like working at all");
	if(arguments.length > 3)
		console.log("I like to overwork");
	for(var i=0;i<arguments.length;i++){
		console.log(arguments[i]);
	}
}
work();
work(24,7);
work("All the time");
work(24,7,8,"hours a day");
work(false);