var GuestListView = Backbone.View.extend({
				el : "#guestbook",
				events : {
					"click #listbutton" : "displayAllGuests"
				},
				initialize : function(){
					this.listenTo(this.collection,"sync",this.display)
				},
				displayAllGuests : function(){
					this.collection.fetch();
				},
				display : function(){
					this.collection.each(function(item){
						console.log(item.get("name") + ", " + item.get("comments"));
					});
				}
			});

var GuestBookView = Backbone.View.extend({
				el : "#addguest",
				events : {
					"click #addbutton" : "addButtonClicked",
					"click #deletebutton" : "deleteButtonClicked",
					"focus #name" : "textFocus",
					"blur #name" : "textBlur"
				},
				addButtonClicked : function(){
					var guest = new GuestModel();
					guest.set("name",$("#name").val());
					guest.set("address",$("#address").val());
					guest.set("comments",$("#comments").val());
					guest.save();
				},
				textBlur : function(e){
					console.log(e);
					$("#name").css("background-color","white");
				},
				textFocus : function(){
					$("#name").css("background-color","yellow");
				},
				deleteButtonClicked : function(){

				}
			});