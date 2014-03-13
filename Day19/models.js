var GuestModel = Backbone.Model.extend({
				defaults : {
					name : "",
					address : "",
					comments : ""
				},
				url : "GuestBook"
		});