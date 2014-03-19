Ext.define("Wednesday.view.FestivalDetailsScreen",{
	extend : "Ext.Panel",
	xtype : "festivaldetails",
	config : {
		items: [{
			xtype : "titlebar",
			title : "",
			id : "festivaltitlebar",
			titleAlign : "center",
			height : "3%",
			items : [
				{
					xtype : "button",
					text : "back"
				}
			]
		}]
	}
});