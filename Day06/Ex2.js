//filter, forEach, map
var print = console.log;
var countries = ["India","US","UK","China","Japan","Russia"];
print(countries.map(function(item){return item.toLowerCase();}));
print(countries.map(function(item){return item.length;}));
print(countries.map(function(item){
	return {name:item};
}));

print(countries.filter(function(item){return item.indexOf("U") == 0;}));
print(countries.filter(function(item){return item.indexOf("u") != -1;}));
