Acct.main({
	launch : function(){
		//Implement the following in Acct.js
		$("#addbutton").click(addButtonClicked);
	}
});

function getDesignation(){
	var designation = "";
	if (document.getElementById('prog').checked) {
  		designation = document.getElementById('prog').value;
	}
	if (document.getElementById('web').checked) {
  		designation = document.getElementById('web').value;
	}
	if (document.getElementById('tester').checked) {
  		designation = document.getElementById('tester').value;
	}
	return designation;
}
var infoArr = [];
function addButtonClicked(){
	var infoObj = {};
	infoObj["company"] = $("#company").val();
	infoObj["location"] = $("#location").val();
	infoObj["newsLetter"] = 
		document.getElementById("newsletter").checked ? "Yes":"No";
	infoObj["designation"] = getDesignation();
	infoArr[infoArr.length] = infoObj;
	console.log(infoArr);


	//Fetch the values of all the form items
	//Create a JSON object storing all the values
	//Add the JSON object to an array
	//alert("Add button clicked");
}