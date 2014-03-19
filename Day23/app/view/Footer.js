Ext.define("Wednesday.view.Footer",{
	extend : "Ext.TitleBar",
	xtype : "footer",
	config : {
		height : "3%",
		docked : "bottom",
		items : [
					{
						xtype : "button",
						text : "Home"
					}
		]
	}
});