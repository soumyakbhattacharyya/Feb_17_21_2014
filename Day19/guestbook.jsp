<%@page import="java.util.*"%>
<%!
	private class Guest{
		String name,address,comments;
		Guest(String n,String a,String c){
			name = n; address = a; comments = c;
		}
		String toJson(){
			String json = "{\"name\":" ;
			json += "\"" + name + "\"" + ",";
			json += "\"address\":\"" + address + "\"" + ",";
			json += "\"comments\":\"" + comments + "\"";
			json += "}";
			return json;
		}
	}
%>
<%! private ArrayList<Guest> guests = new ArrayList<Guest>();%>
<%
	String action = request.getParameter("action");
	if("add".equals(action)){
		String name = request.getParameter("name");
		String address = request.getParameter("address");
		String comments = request.getParameter("comments"); 
		Guest guest = new Guest(name,address,comments);
		guests.add(guest);	
		out.println(guest.toJson());
	}
	else{
		String json = "{\"guestbook\":[";
		for(Guest g : guests){
			json += g.toJson() + ",";
		}
		json = json.substring(0,json.length() -1);
		json += "]}";
		out.println(json);
	}
%>