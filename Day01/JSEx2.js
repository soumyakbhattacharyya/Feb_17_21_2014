var langs = ["Tamil", "Hindi", "English", "Urdu", "Kannada","French"];
var result = [];
for(var i=0;i<langs.length;i++){
	var lang = langs[i];
	result[lang] = lang.length;
}
for(var item in result){
	console.log(item + "(" + result[item] + ")");
}