<%@page import="java.net.*,java.util.*"%>
<%@page import="java.io.*,com.fasterxml.jackson.databind.ObjectMapper"%>

<%
	 try
      {
      	 String city = request.getParameter("city");
      	 String country = request.getParameter("country");
         URL url = new URL("http://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country + "&units=metric");
         URLConnection urlConnection = url.openConnection();
         HttpURLConnection connection = null;
         if(urlConnection instanceof HttpURLConnection)
         {
            connection = (HttpURLConnection) urlConnection;
         }
         else
         {
            out.println("Please enter an HTTP URL.");
            return;
         }
         BufferedReader in = new BufferedReader(
         new InputStreamReader(connection.getInputStream()));
         String urlString = "";
         String current;
         while((current = in.readLine()) != null)
         {
            urlString += current;
         }
         //out.println(urlString);
         ObjectMapper mapper = new ObjectMapper();
		 Map<String,Object> values = mapper.readValue(urlString, Map.class);
		 out.println(values.get("main"));
      }catch(IOException e)
      {
         out.println(e.getMessage());
      }
%>