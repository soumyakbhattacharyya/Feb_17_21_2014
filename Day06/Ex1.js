//Ex1.js
var countries = ["India","US","UK","China","Japan","Russia"];

//Print all the countries starting with U
for(var i=0;i<countries.length;i++){
	var country = countries[i];
	if(country.indexOf("U") == 0)
		console.log(country);
}
//Print all the countries that have a character "u"
for(var i=0;i<countries.length;i++){
	if(countries[i].indexOf("u") != -1)
		console.log(countries[i]);
}
//Create a new array that contains all the values in lowercase
//Create a new array that contains the length of all the values

var newArr = [];
var lengthArr = [];
for(var i=0;i<countries.length;i++){
	newArr.push(countries[i].toLowerCase());
	lengthArr.push(countries[i].length);
}
console.log(newArr);
console.log(lengthArr);
//Generate a new array that has all the values converted 
//to an object with a property called name 
//ie., [{name:"India"},{name:"US"}]
var objects = [];
for (var i = 0; i < countries.length; i++) {
	var obj = new Object();//{name:""}
	obj.name = countries[i];
	objects.push(obj);
};
console.log(objects);


/*function test(){
	console.log("Test");
}
test.apply(); //test.apply();
*/









