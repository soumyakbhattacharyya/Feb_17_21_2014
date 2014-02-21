var book1 = {
	title : "ABC",
	author : "XYZ",
	read : function(){
		console.log("Reading " + this.title);
	}
};
console.log(book1.title);
console.log(book1["title"]);
book1.read();
book1["read"]();



var book = [];
for(var item in book1){
	book[item] = book1[item];
}
console.log(book);