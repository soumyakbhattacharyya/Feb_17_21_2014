window.onload = init;
var db;

function init(){
	document.getElementById("addbutton").onclick = addContact;
	document.getElementById("searchfirstname").onkeyup = searchContact;
	createAndInitializeAddressBook();
}
function searchContact(){
	var firstname = document.getElementById("searchfirstname").value;
	var query = firstname != "" ? "select * from contacts where firstname=?":"select * from contacts";
	var args = firstname != ""?[firstname]:[];
	db.transaction(function(txn){
		txn.executeSql(query,args,
		function(tx,result){
			var count = result.rows.length;
			var tbody = document.getElementById("contactstbody");
			tbody.innerHTML = "";
			for(var i=0;i<count;i++){
				var row = result.rows.item(i);
				addRowToContactsTable(row.mobile,row.firstname,row.lastname);
			}
		});
	});
}
function displayContacts(txn){
	var query = "select * from contacts";
	txn.executeSql(query,[],function(tx,result){
		var count = result.rows.length;
		for(var i=0;i<count;i++){
			var row = result.rows.item(i);
			addRowToContactsTable(row.mobile,row.firstname,row.lastname);
		}
	});
}
function addRowToContactsTable(mobile,firstname,lastname){
	var tbody = document.getElementById("contactstbody");
	var row = document.createElement("tr");
	var columns = "<td>" + firstname + "</td>";
	columns += "<td>" + lastname + "</td>";
	row.innerHTML = columns;
	tbody.appendChild(row);
	row.onmouseover = function(){
		this.style.opacity = "0.5";
		this.setAttribute("title",mobile);
	};
	row.onmouseout = function(){
		this.style.opacity = "1";
		this.setAttribute("title","");
	}
}

function addContact(){
	var mobile = document.getElementById("mobile").value;
	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	

	db.transaction(function(txn){
		var query = "insert into contacts values(?,?,?)";
		txn.executeSql(query,[mobile,firstname,lastname],
			function(tx,result){
				if(result.rowsAffected == 1){
					addRowToContactsTable(mobile,firstname,lastname);
				}
			},
			function(tx,error){
				console.log("Error " + error.message);
			});
	});
}

function createAndInitializeAddressBook(){
	db = openDatabase("AddressBook",1.0,"Web sql lab",21321323);
	db.transaction(function(txn){
		var query = "create table if not exists contacts(mobile unique,firstname,lastname)";
		txn.executeSql(query,[],function(){
			console.log("Created Contacts successfully");
		});
	});
	db.transaction(displayContacts);
}
