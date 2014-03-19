Ext.define("Wednesday.view.LoginScreen",{
	extend : "Ext.Panel",
	xtype : "loginscreen",
	config : {
		items : [
			{
				xtype : "textfield", id:"username",
				placeHolder : "User name"
			},
			{
				xtype : "passwordfield", id:"password",
				placeHolder : "Password"
			},
			{
				xtype : "button", id:"loginbutton",
				text : "Login"
			}
		]
	}
});