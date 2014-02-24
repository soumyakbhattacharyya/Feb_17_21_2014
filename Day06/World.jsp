<%
	String country = request.getParameter("country");
	String capital = "Unknown";
	if("India".equals(country))
		capital = "New Delhi";
	else if("USA".equals(country))
		capital = "Washington DC";
	else if("UK".equals(country))
		capital = "London"; 
	out.println("<h1>" + capital + "</h1>");
%>