<%
	String country = request.getParameter("country");
	String output = "Not available in DB";
	if("India".equals(country))
		output = "New Delhi";
	else if("USA".equals(country))
		output = "Washington D.C";
	else if("UK".equals(country))
		output = "London";	
	out.println(output);
%>