var Global = {
	URL : "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22SYMBOLVAL%22)%0A%09%09&env=http%3A%2F%2Fdatatables.org%2Falltables.env&format=json",
	symbols : ["YHOO","HP","FB","AAPL","INTC","GM","IBM","INFY","GOOG","MS"],
	tempSymbols : [],
	refreshCalled : false,
	populateTempSymbols : function(){
		for(var i=0;i<this.symbols.length;i++){
			this.tempSymbols.push(this.symbols[i]);
		}
	}
};

function displayInTable(symbol,price,change){
	if(!Global.refreshCalled){
		var row = "<tr>";
		row += "<td>" + symbol + "</td>";
		var color = "red";
		if(change)
		 color = change.indexOf("+") == -1 ? "red":"green";
		row += "<td style='background-color:" + color + "'>" + price + "</td>";
		row += "</tr>";
		$("tbody").append(row);
		$("#stocks").show();
	}
	else{
		var expr = "tbody tr td:contains('" + symbol + "')";	
		var priceCol = $(expr).next();
		priceCol.text(price);
		var color = "red";
		if(change)
		 	color = change.indexOf("+") == -1 ? "red":"green";	
		priceCol.css("background-color",color);
	}

}
function getNextSymbolInList(){
	var symbol = Global.tempSymbols.pop();
	return symbol;
}

function displayStockPrice(){
		var symbol = getNextSymbolInList();
		if(symbol){
			var url = Global.URL.replace("SYMBOLVAL",symbol);
			$.getJSON(url,function(response){
				var results = response.query.results;
				var price = results != null?results.quote.LastTradePriceOnly:"Unable to fetch values from server";
				var change = results != null?response.query.results.quote.Change:undefined;
				displayInTable(symbol,price,change);
				displayStockPrice();
			});			
		}
}
function refreshStockValues(){
	Global.refreshCalled = true;
	Global.populateTempSymbols();
	displayStockPrice();
}

$().ready(function(){
	Global.populateTempSymbols();
	displayStockPrice();
	$(":button").on("click",refreshStockValues);
});