//Closures
function add(a,b){
	var tot = a+b;
	return function(c){
		return tot + c;
	}
}
var f1 = add(1,2);
var total = f1(3);
console.log(total); //OUTPUT SHOULD BE 6

function print(arg){
	arg();
}
print(function(){
	console.log("Printing");
});

/*function print(){
	console.log("Printing");
}
print();
*/

function printHelloWorld(arg){
	arg("Hello World");
}
printHelloWorld(function(data){
	console.log(data);
});
/*
function printHelloWorld(arg){
	console.log(arg);
}
printHelloWorld("Hello World");
*/



function compute(arg){
	var numbers = [1,2,3,4,56,7,8,9,10,40];
	for(var num in numbers){
		arg(numbers[num]);
	}
}
var sum = 0;
compute(function(i){ sum += i; });
console.log("Sum: " + sum);

var max = 0;
compute(function(i){  if(max < i) max = i;  });
console.log("Largest: " + max);

//Print the sum of all numbers
//Print the largest of all numbers
//Print the sum of squares of all numbers

