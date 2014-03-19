Ext.define("Wednesday.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		control : {
			"#loginbutton" : {
				tap : "onLoginButtonTapped"
			}
		}
	},
	onLoginButtonTapped : function(){
		alert("Tapped");
	}
});