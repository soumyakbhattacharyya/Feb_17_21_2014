Ext.define("Wednesday.view.LoginScreen",{
	extend : "Ext.Panel",
	xtype : "loginscreen",
	config : {
		items : [
			{
				xtype : "textfield", id:"username",
				placeHolder : "User name",value:"admin"
			},
			{
				xtype : "passwordfield", id:"password",
				placeHolder : "Password",value:"admin"
			},
			{
				xtype : "button", id:"loginbutton",
				text : "Login"
			}
		]
	}
});