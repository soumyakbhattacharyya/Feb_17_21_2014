var countries = [];
countries["India"] = "New Delhi";
countries["US"] = "Washington DC";
countries["UK"] = "London";

for(var item in countries){
	console.log(item + ", " + 
		countries[item]);
}

/*for(var i=0;countries.length;i++){
	console.log(countries[i]);
}*/
console.log("****************************");


var something = [1,"Hello",true,"Cool",3.14,undefined];


var arr1 = [];
var arr2 = ["Java","C#","Ruby"];
console.log(arr2[0]);
console.log(arr2[1]);
console.log(arr2[10]);//undefined

for(var i=0;i<arr2.length;i++){
	console.log(arr2[i]);
}




var str1 = "JavaScript is cool";
console.log(str1.length);
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());

var a = 100;
var b = 200;
var c = a+b;
console.log("Sum of a and b is " + c);
