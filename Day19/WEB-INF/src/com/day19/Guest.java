package com.day19;

public class Guest {
	private String name,address,comments;
	public Guest(String n,String a,String c){
		name = n; address = a; comments = c;
	}
	public String toJson(){
		String json = "{\"name\":" ;
		json += "\"" + name + "\"" + ",";
		json += "\"address\":\"" + address + "\"" + ",";
		json += "\"comments\":\"" + comments + "\"";
		json += "}";
		return json;
	}
}
