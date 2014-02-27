<%
	String userAgent = request.getHeader("user-agent");
	out.println(userAgent);
	if(userAgent.contains("iPhone"))
		out.println("<h1>Welcome to iPhone version</h1>");
	else if(userAgent.contains("iPad"))
		out.println("<h1>Welcome to Tablet version</h1>");
	else
		out.println("<h1>Welcome to the desktop version</h1>");
%>