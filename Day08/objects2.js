var p1 = new Person("Sam",12);
p1.eat();
console.log(p1.getName());

function Person(theName,theAge){
	var name = theName;
	var age = theAge;
	this.getName = function(){
		return name;
	};
	this.getAge = function(){
		return age;
	};
	this.eat = function(){
		console.log(name + " is eating");
	};
	this.sleep = function(){
		console.log(name + " is sleeping");
	};
}
function Car(theModel,theYearOfMake){
	this.model = theModel;
	this.yearOfMake = theYearOfMake;
	this.drive = function(){
		console.log("Driving " + this.model);
	};
}
var c1 = new Car("Santro",2013);
console.log(c1.model + ", " + c1.yearOfMake);
c1.drive();

var c2 = new Car("City",2010);
console.log(c2.model + ", " + c2.yearOfMake);
c2.drive();