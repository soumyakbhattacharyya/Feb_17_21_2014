<%
	String country = request.getParameter("country");
	String output = "{\"capital\":\"NA\",\"continent\":\"NA\",\"population\":\"NA\"}";
	if("India".equals(country))
		output = "{\"capital\":\"ND\",\"continent\":\"Asia\",\"population\":\"1.2 billion\"}";
	else if("USA".equals(country))
		output = "{\"capital\":\"Washington DC\",\"continent\":\"NA\",\"population\":\"50 million\"}";
	else if("UK".equals(country))
		output = "{\"capital\":\"London\",\"continent\":\"Europe\",\"population\":\"6.5 million\"}";
	out.println(output);
%>