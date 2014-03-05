<%
	String name = request.getParameter("name");
	String output = "Hi " + name;
	out.println("{\"message\":\"" + output +  "\"}");
%>