<%
	String country = request.getParameter("country");
	String output = "{\"capital\":\"Not available in DB\"}";
	if("India".equals(country))
		output = "{\"capital\":\"New Delhi\"}";
	else if("USA".equals(country))
		output = "{\"capital\":\"Washington D.C\"}";
	else if("UK".equals(country))
		output = "{\"capital\":\"London\"}";			

/*	if("India".equals(country))
		output = "New Delhi";
	else if("USA".equals(country))
		output = "Washington D.C";
	else if("UK".equals(country))
		output = "London";	
*/
	out.println(output);
%>