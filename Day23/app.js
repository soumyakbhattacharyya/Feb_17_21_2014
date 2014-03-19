//An instance of Ext.app.Application class is created
//Link to all the controllers,models, stores and views

Ext.application({
	name : "Wednesday",
	appFolder : "app",
	controllers : ["AuthenticationController","HomeController","FestivalController"],
	views : ["LoginScreen","Footer","HomeScreen","GameScreen","WeatherScreen","FestivalDetailsScreen"],
	models : ["Festival"],
	stores : ["FestivalStore"],
	launch : function(){
		Ext.Viewport.add({xtype:"loginscreen"});
	}
});