var Global = {
	contactTemplate : "<li id='$id'>$name <br/> $phone</li>",
	liToBeRemoved : ""
};

$().ready(function(){
	$("#addcontactbtn").on("click",addContact);
	$("#yesbutton").on("click",removeContact);
	$("#nobutton").on("click",doNotRemoveContact);
});
function doNotRemoveContact(){
	Global.liToBeRemoved = "";
	$("#removepopup").popup("close");
}
function removeContact(){
	Global.liToBeRemoved.remove();
	$("#contacts").listview("refresh");
	$("#removepopup").popup("close");
}
function contactTapHold(){
	Global.liToBeRemoved = $(this);
	//var id = $(this).attr("id");
	$("#removepopup").popup("open");
}
function addContact(){
	var name = $("#name").val();
	var phone = $("#phone").val();
	var li = Global.contactTemplate.replace("$id",phone)
						  .replace("$name",name)
						  .replace("$phone",phone);
	$("#contacts").append(li);
	$("#contacts").listview("refresh");
	var li = $("#"+phone);
	li.on("taphold",contactTapHold);			
	$("#addcontactpopup").popup("close");
	$("#name,#phone").val("");
}