package Classes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


//abstraction 
 abstract public class AirlineA {

	 
	 //encapsulation
	private String airName;
	private String airId;
	private String flightName ;
	
	
	
	public String getAirName() {
		return airName;
	}
	public void setAirName(String airName) {
		this.airName = airName;
	}
	public String getAirId() {
		return airId;
	}
	public void setAirId(String airId) {
		this.airId = airId;
	}
	public String getFlightName() {
		return flightName;
	}
	public void setFlightName(String flightName) {
		this.flightName = flightName;
	}
	
	public AirlineA()
	{
		airName="";
		airId="";
		flightName="";
	}
	
	public AirlineA(String airName , String airId , String flightName)
	{
		this.airId=airId;
		this.airName=airName;
		this.flightName=flightName;
	}
	
	public  void readAirline(int airId)throws SQLException
	{
		
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="select * from airline where airId=?";
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st=con.prepareStatement(query);		
		ResultSet rs=st.executeQuery();
		
		st.setInt(1, airId);
		
		if(rs.next())
		{
			
			System.out.println(rs.getString(1));
			System.out.println(rs.getString(2));
			System.out.println(rs.getString(3));
			System.out.println();
		}
		else
		{
			System.out.println("Sorry no airline found");
		}
		
		
		
		con.close();
	}
	public void display()
	{
		
		
	}
}
