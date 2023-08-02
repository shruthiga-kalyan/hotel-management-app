package Classes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Passenger {
	
	private String passengerName;
	private int  passengerId;
	private String location;

	
	
	public String getPassengerName() {
		return passengerName;
	}
	public void setPassengerName(String passengerName) {
		this.passengerName = passengerName;
	}
	public int getPassengerId() {
		return passengerId;
	}
	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	
	
	public Passenger()
	{
		passengerName= "";
		passengerId=0;
		location="";
	}
	
	public Passenger(String passengerName , int passengerId , String location)
	{
		this.passengerId=passengerId;
		this.passengerName = passengerName;
		this.location=location;
		
		
	}
	
	
	public void insertPassenger(String passengerName , int passengerId, String location)throws SQLException
	{
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="insert into passenger values(?,?,?);";	
		
		
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st= con.prepareStatement(query);
		st.setString(1, passengerName);
		st.setInt(2, passengerId);
		st.setString(3, location);
		
		int  row=st.executeUpdate();
//			System.out.println("Number of rows affected "+row);
			System.out.println();
		
		con.close();
		
	}
	
	
	public  void readPassenger(int passengerId)throws SQLException
	{
		
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="select * from passenger where passengerId=?";
		
		
		try
		{
			
			Connection con = DriverManager.getConnection(url,user,password);
			PreparedStatement st=con.prepareStatement(query);		
			st.setInt(1,passengerId);
			ResultSet rs=st.executeQuery();
			
			
//		
			
			System.out.println("NAME :"+rs.getString(1));
			System.out.println("ID : "+rs.getInt(2));
			System.out.println("LOCATION : "+rs.getString(3));
			System.out.println();		
//		
			
			
			
			con.close();
		}
		catch(Exception e)
		{
			
		}
		
		
	}
	
	public  void display()
	{
		Passenger pass =new Passenger();
		System.out.println("NAME :"+pass.getPassengerName());
		System.out.println("ID : "+pass.getPassengerId());
		System.out.println("LOCATION : "+pass.getLocation());
		
	}
	
	
	public static void deletePassenger(int passengerId)throws SQLException
	{
		
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="delete from passenger where passengerId=?";
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		   PreparedStatement st = con.prepareStatement(query);

		     

		    st.setInt(1, passengerId);
		    int row = st.executeUpdate(); 

		    System.out.println("Number of rows affected " + row);
		    System.out.println("Successfully deleted! " );

		    con.close();
	}

	


}
