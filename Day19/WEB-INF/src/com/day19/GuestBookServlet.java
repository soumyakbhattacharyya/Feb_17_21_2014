package com.day19;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.fasterxml.jackson.databind.ObjectMapper;


@WebServlet("/GuestBook")
public class GuestBookServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ArrayList<Guest> guests = new ArrayList<Guest>();
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String json = "{\"guestbook\":[";
		for(Guest g : guests){
			json += g.toJson() + ",";
		}
		if(guests.size() > 0)
			json = json.substring(0,json.length() -1);
		json += "]}";
		PrintWriter out = response.getWriter();
		out.println(json);
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		PrintWriter out = response.getWriter();
		
		String model = request.getParameter("model");
		ObjectMapper mapper = new ObjectMapper();
		Map<String,String> values = mapper.readValue(model, Map.class);
		String name = values.get("name");
		System.out.println("name : " + name);
		String address = values.get("address");
		System.out.println("address : " + address);
		String comments = values.get("comments");
		System.out.println("comments : " + comments);
		Guest guest = new Guest(name,address,comments);
		guests.add(guest);	
		
		out.println(guest.toJson());
	}

}
