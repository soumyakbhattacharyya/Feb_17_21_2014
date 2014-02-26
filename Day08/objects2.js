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