function work(arg){
	arg();
}
work(function(){console.log("coding");});
work(add);

function f(){

}
var myfunction = f;
var myfunction2 = f();

function add(num1,num2){
	 console.log(num1+num2);
}
var sum = add(12,12);
console.log(sum);


function subtract(num1,num2){
	return function(){
		console.log(num1-num2);	
	};
}
var diff = subtract(10,4);
console.log(typeof(diff));
diff();