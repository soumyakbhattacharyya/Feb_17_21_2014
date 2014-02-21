//JSON 
//JavaScript Object Notation
var book1 = {
	title : "ABC",
	author : "XYZ"
};
//convert book1 json object into an array where the keys are the 
//book1's properties


var player1 = {
	name : "Dhoni",
	age : 32,
	address : {
		city : "Ranchi", state : "Jharkand"
	},
	hobbies : ["TV","Bike"],
	play : function(){
		console.log(this.name + " is playing Cricket");
	}
};
console.log(player1.address.city);
player1.play();

var person1 = {
	name : "Sam",
	age : 12
};
console.log(person1.name + ", " + person1.age);