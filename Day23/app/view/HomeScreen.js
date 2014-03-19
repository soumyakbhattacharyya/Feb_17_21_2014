Ext.define("Wednesday.view.HomeScreen",{
	extend : "Ext.Panel",
	xtype : "homescreen",
	config : {
		defaults : {xtype:"button",height:"30%",width:"50%",margin:5},
		layout : {
			type : "vbox",
			align : "center",
			pack : "center"
		},
		items : [
			{
				text : "Game",
				id : "gamebutton"
			},
			{
				text : "Weather",
				id : "weatherbutton"
			}
		]
	}
});