window.Lab = {};

$().ready(function(){
	Lab.guestTemplate = _.template($("#guesttemplate").html());
	Lab.guestBookTemplate = _.template($("#guestbooktemplate").html());
	loadGuestBookFromServer();
	$("#addguestbtn").on("click",addGuest);
});
function loadGuestBookFromServer(){
	$.getJSON("guestbook.jsp",function(response){
		var guestbook = response.guestbook;
		var output = Lab.guestBookTemplate(response);
		$("#guestbook").append(output);
		$("#guestbook").listview("refresh");
		
/*		for(var i=0;i<guestbook.length;i++){
			var li = Lab.guestTemplate(guestbook[i]);
			$("#guestbook").append(li);
			$("#guestbook").listview("refresh");

		}
*/		
	});
}
function addGuest(){
	var name = $("#name").val();
	var address = $("#address").val();
	var comments = $("#comments").val();	
	$.ajax({
		url : "guestbook.jsp",
		dataType : "json",
		data : {
			action : "add",
			name : name, address : address, comments : comments
		},
		success : function(response){
			var li = Lab.guestTemplate(response);
			$("#guestbook").append(li);
			$("#guestbook").listview("refresh");
			$("#addguestpopup").popup("close");
			$("#name,#address,#comments").val("");
		}
	});
	
}