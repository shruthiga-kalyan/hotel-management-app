package Classes;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class Ticket extends Flight {

	private String ticketId;
	private int flightId;
	private int passengerId;
	
	public String getTicketId() {
		return ticketId;
	}
	public void setTicketId(String ticketId) {
		this.ticketId = ticketId;
	}
	public int getFlightId() {
		return flightId;
	}
	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}
	public int getPassengerId() {
		return passengerId;
	}
	public void setPassengerId(int passengerId) {
		this.passengerId = passengerId;
	
	}
	
	public Ticket (String ticketId,int flightId, int passengerId)
	{
		this.flightId=flightId;
		this.ticketId=ticketId;
		this.passengerId=passengerId;
	}
	
	public Ticket()
	{
		flightId=0;
		passengerId=0;
		ticketId="";
		
	}
	

	
	public void insertTicket(String name, int id , String loc, String src, String dest, String depDate, String arrivalDate,int cost)throws SQLException
	{
		Ticket t= new Ticket();
		Flight f= new Flight();
		Passenger p = new Passenger();
		
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="insert into ticket values(?,?,?,?,?,?,?);";
		
		
		
		
		
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st= con.prepareStatement(query);
		
		
		st.setInt(1, id);
		st.setString(2, name);
		st.setString(3, src);
		st.setString(4, dest);
		st.setString(5, depDate);
		st.setString(6, arrivalDate);
		st.setInt(7, cost);
		
		int  row=st.executeUpdate();
//			System.out.println("Number of rows affected "+row);
		
		
		con.close();
		
	
	}
	
	public  void readTicket(int id)throws SQLException
	{
		
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="select * from ticket where passengerId=?";
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st=con.prepareStatement(query);	
		st.setInt(1, id);
		
		ResultSet rs=st.executeQuery();
		
		
		System.out.println("---------------------------TICKET-----------------------------");
		   if (rs.next()) {
			   System.out.println("ID : " + rs.getInt(1));
		        System.out.println("NAME : " + rs.getString(2));		       
		        System.out.println("FROM  : " + rs.getString(3));
		        System.out.println("TO  : " + rs.getString(4));
		        System.out.println("OUTBOUND  : " + rs.getString(5));
		        System.out.println("RETURN  : " + rs.getString(6));
		        System.out.println("COST  : " + rs.getInt(7));
		        System.out.println("--------------------------------------------------------------\nTHANK YOU FOR BOOKING!");
		    } else {
		        System.out.println("No ticket found for passenger with ID: " + id);
		    }
		
		con.close();
	}
	
	
	
	
}
