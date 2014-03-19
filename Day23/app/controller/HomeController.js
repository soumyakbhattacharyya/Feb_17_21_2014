Ext.define("Wednesday.controller.HomeController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			"home" : "#home",
			"game" : "#game",
			"weather" : "#weather"
		},
		control : {
			"footer button" : {
				tap : "onFooterButtonTapped"
			},
			"#gamebutton" : {
				tap : "onGameButtonTapped"
			},
			"#weatherbutton" : {
				tap : "onWeatherButtonTapped"
			}
		}
	},
	onFooterButtonTapped : function(){
		Ext.Viewport.setActiveItem(this.getHome());
	},
	onGameButtonTapped : function(){
		if(this.getGame() == undefined)
			Ext.Viewport.setActiveItem({xtype:"gamescreen",id:"game"});
		else
			Ext.Viewport.setActiveItem(this.getGame());
	},
	onWeatherButtonTapped : function(){
		if(this.getWeather() == undefined)
			Ext.Viewport.setActiveItem({xtype:"weatherscreen",id:"weather"});
		else
			Ext.Viewport.setActiveItem(this.getWeather());
	}
});