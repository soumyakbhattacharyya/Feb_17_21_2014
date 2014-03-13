var GuestBookCollection = Backbone.Collection.extend({
				model : GuestModel,
				url : "GuestBook",
				parse : function(response){
					return response.guestbook;
				}
			});
