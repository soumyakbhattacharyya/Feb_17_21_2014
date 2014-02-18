//Lab02.js

function add(){
	var total = 0;
	for(var i=0;i<arguments.length;i++){
		total += arguments[i];
	}
	console.log("Total: " + total);
}
function largest(){
	var max = 0;
	for(var i=0;i<arguments.length;i++){
		if(max < arguments[i])
			max = arguments[i];
	}
	console.log("Largest: " + max);
}
add(1,12,2,12,12,42,54,553,464,575);
add(3453435435.4,5.34,334);
add(1,2);


largest(1,12,2,12,12,42,54,553,464,575);
largest(3453435435.4,5.34,334);
largest(1,2);
