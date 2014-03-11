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
	liToBeRemoved = "";
	$("#removepopup").popup("close");
}
function removeContact(){
	liToBeRemoved.remove();
	$("#contacts").listview("refresh");
	$("#removepopup").popup("close");
}
function contactTapHold(){
	liToBeRemoved = $(this);
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