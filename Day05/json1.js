//JSON 
//JavaScript Object Notation

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