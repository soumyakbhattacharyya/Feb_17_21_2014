function calculator(arg){
	arg(20,30);
}
calculator(function(a,b){console.log(a+b);});
calculator(function(a,b){console.log(a-b);});
calculator(function(a,b){console.log(a*b);});
calculator(function(a,b){console.log(a/b);});




function compute(arg){
	for (var i=0;i<100;i++){
		arg(i);
	}	
}
compute(function(num){
	console.log("*****Calling arg(" + num + ")");
	if(num %2 == 0)
		console.log(num + " is even");
});



//compute(function(num){ console.log(if(num%2 == 0) console.log(num);});
//compute(function(num){ if(num%2 != 0) console.log(num);});

//*******OLDER STYLE**************
function computeEven(arr){
	for(var i=0;i<arr.length;i++){
		if(arr[i] %2 == 0)
			console.log(arr[i]);
	}
}
//computeEven([1,2,32,234,234,234,234,2345,32,423,4]);