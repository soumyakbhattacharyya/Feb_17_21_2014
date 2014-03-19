Ext.define("Wednesday.controller.AuthenticationController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			"userName" : "#username",
			"pwd" : "#password"
		},
		control : {
			"#loginbutton" : {
				tap : "onLoginButtonTapped"
			}
		}
	},
	onLoginButtonTapped : function(){
		if(this.getUserName().getValue() == "admin" && 
			this.getPwd().getValue() == "admin"){
			Ext.Viewport.setActiveItem({ xtype:"homescreen",id:"home" })
		}
		else
			Ext.Msg.alert("Invalid credentials");

	}
});