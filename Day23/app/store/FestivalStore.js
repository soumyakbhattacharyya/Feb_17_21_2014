Ext.define("Wednesday.store.FestivalStore",{
	extend : "Ext.data.Store",
	config : {
		model : "Wednesday.model.Festival",
		autoLoad : true,
		proxy : {
			type : "ajax",
			url : "festivals.json",
			reader : {
				type : "json",
				rootProperty : "festivalsAllOver"
			}
		}
	}
});