Ext.define("Wednesday.view.WeatherScreen",{
	extend : "Ext.Panel",
	xtype : "weatherscreen",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Temperature",
				titleAlign : "center",
				height : "3%"
			},
			{
				xtype : "footer"
			}
		]
	}
});