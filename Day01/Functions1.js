var globalVar = "";
function work(){
	company = "ABC corp";//BAD PRACTICE
	console.log("Working for " + company);
}
confuse();
console.log(company);
work();
console.log(company);


function confuse(){
	company = "Thorougly confused";
}

console.log("********************************");



function sleep(){
	var hours = 10;//LOCAL
	console.log("Sleeping " + hours + " hours a day");
}
sleep();
//console.log(hours);//ERROR


function eat(){
	console.log("Eating");
}
eat();

function add(num1,num2){
	return num1+num2;
}

console.log(add(2,3));