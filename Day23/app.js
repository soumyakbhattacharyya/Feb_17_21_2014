//An instance of Ext.app.Application class is created
//Link to all the controllers,models, stores and views

Ext.application({
	name : "Wednesday",
	appFolder : "app",
	controllers : ["AuthenticationController"],
	views : ["LoginScreen"],
	models : [],
	stores : [],
	launch : function(){
		Ext.Viewport.add({xtype:"loginscreen"});
	}
});