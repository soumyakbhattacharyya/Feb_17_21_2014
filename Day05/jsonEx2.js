function generate(jsonObj){
	var queryString = "";
	for(var prop in jsonObj){
		if(Array.isArray(jsonObj[prop])){
			var arr = jsonObj[prop];
			var str = prop + "=";
			for(var i=0;i<arr.length;i++){
				str += arr[i] + "_";	
			}
			str = str.substring(0,str.length - 1);
			queryString += str + "&";
		}
		else
			queryString += prop + "=" + jsonObj[prop] + "&";
	}
	queryString = queryString.substring(0,queryString.length-1);
	console.log(queryString);
}
generate({name:"Sam",age:12,hobbies:["TV","Music"]});
generate({title:"ABC",price:100,publisher:"Apress"});

//The output should be

//   name=Sam&age=12&hobbies=TV_Music
//   title=ABC&price=100&publisher=Apress