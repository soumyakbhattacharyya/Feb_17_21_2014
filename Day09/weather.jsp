<%
	String args = request.getParameter("q");
	String city = args.split(",")[0];
	String country = args.split(",")[1];
	String output = "test({";
	output += "\"sys\":{\"country\":\"" + country + "\"}," ;
	output += "\"main\":{\"temp_max\":" + Math.random()*40 + "," ;
	output += "\"temp_min\":" + Math.random()*20 + "}," ;
	output += "\"name\":\"" + city + "\"," ;
	output += "\"dt\":\"" + new java.util.Date() + "\"" ;
	output += "})";
	out.println(output);
%>