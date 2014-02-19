//Higher-order functions
function confuse(){
	return function(){ console.log("What the hell is going on?");};
}
var output = confuse();
output();

function work(arg){
	if(typeof(arg) == "function")
		arg();
	else
		console.log("You need to pass a function")
}
function scratchMyHead(){
	console.log("Scratching my head");
}
work(scratchMyHead);
work(10);
work(scratchMyHead());

console.log("********************************");

var eat = function(items){
	console.log("Eating " + items);
}
console.log(eat);
eat("Rice");

var sleep = function(){
	console.log("Time to sleep");
}
sleep();