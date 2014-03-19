Ext.define("Wednesday.controller.FestivalController",{
	extend : "Ext.app.Controller",
	config : {
		refs : {
			"weatherScreen" : "#weather",
			"festivalDetails" : "#festivaldetails",
			"festivalTitlebar" : "#festivaltitlebar"
		},
		control : {
			"list" : {
				itemdoubletap : "onFestivalItemDoubleTapped"
			},
			"#festivaltitlebar button" : {
				tap : "onBackButtonTapped"
			}
		}
	},
	onBackButtonTapped : function(){
		Ext.Viewport.setActiveItem(this.getWeatherScreen());
	},
	onFestivalItemDoubleTapped : function(a,b,c,record){
		if(this.getFestivalDetails() == undefined){
			Ext.Viewport.add({xtype:"festivaldetails", id:"festivaldetails"});
		}
			
		this.getFestivalTitlebar().setTitle(record.get("festival"));
		Ext.Viewport.setActiveItem(this.getFestivalDetails());
	}
});