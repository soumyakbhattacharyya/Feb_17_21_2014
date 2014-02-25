<%
	String country = request.getParameter("country");
	String cities = "{\"cities\":[]}";
	if("India".equals(country))
		cities = "{\"cities\":[\"Pune\",\"Mumbai\",\"Chennai\"]}";
	else if("USA".equals(country))
		cities = "{\"cities\":[\"NJ\",\"Houston\",\"NY\"]}";
	else if("UK".equals(country))
		cities = "{\"cities\":[\"Essex\",\"London\",\"Bristol\"]}";
	out.println(cities);
%>