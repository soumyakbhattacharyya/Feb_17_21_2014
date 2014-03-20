<%
	String username = request.getParameter("username");
	String password = request.getParameter("password");
	String tokenId = request.getParameter("token");

	String output = "{\"message\":\"invalid\"}";
	if(tokenId != null && tokenId != ""){
		String[] tokens = tokenId.split("~");
		if(tokens.length == 4){
			String deviceId = tokens[0];
			String user = new StringBuilder(tokens[1]).reverse().toString();
			String pwd = new StringBuilder(tokens[3]).reverse().toString();
			String tokenVal = tokens[2];
			//validate token, deviceid, user, pwd
			//generate a new token
			String token = "deviceid" + "~" + new StringBuilder(user).reverse().toString() + "~" + System.currentTimeMillis() + "~" + new StringBuilder(pwd).reverse().toString();
			output = "{\"message\":\"valid\",\"token\":\"" + token +  "\"}";
		}
	}
	else if("admin".equals(username) && "admin".equals(password)){
		String token = "deviceid~" + new StringBuilder(username).reverse().toString() + "~" + System.currentTimeMillis() + "~" + new StringBuilder(password).reverse().toString();
		output = "{\"message\":\"valid\",\"token\":\"" + token +  "\"}";
	}
	out.println(output);
%>