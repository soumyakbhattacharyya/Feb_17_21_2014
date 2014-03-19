Ext.define("Wednesday.view.GameScreen",{
	extend : "Ext.Panel",
	xtype : "gamescreen",
	config : {
		items : [
			{
				xtype : "titlebar",
				title : "Guessing game",
				titleAlign : "center",
				height : "3%"
			},
			{
				xtype : "footer"
			}
		]
	}
});