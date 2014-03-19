//An instance of Ext.app.Application class is created
//Link to all the controllers,models, stores and views

Ext.application({
	name : "Wednesday",
	appFolder : "app",
	controllers : ["AuthenticationController","HomeController"],
	views : ["LoginScreen","Footer","HomeScreen","GameScreen","WeatherScreen"],
	models : [],
	stores : [],
	launch : function(){
		Ext.Viewport.add({xtype:"loginscreen"});
	}
});