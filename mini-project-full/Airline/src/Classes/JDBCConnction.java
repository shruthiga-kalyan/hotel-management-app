package Classes;

import java.sql.*;
import java.util.Scanner;

public class JDBCConnction {
	
	public  static Scanner sc= new Scanner(System.in);
	public static Passenger pass= new Passenger();
	public static AirlineA air= new AirlineA();
	public static Ticket ticket= new Ticket();
	public static void main(String rag[]) throws SQLException
	{
		updateAirline();
		
		
//		
	}
	
	//airline 
	
	
	
	public static void insertAirline()throws SQLException
	{
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="insert into airline values(?,?,?);";
		
		
		System.out.println("Enter airline name");
	     String  airline=sc.nextLine();
		
		System.out.println("Enter airline id");
		String airId=sc.nextLine();
		
		System.out.println("Enter flight name");
		String flight=sc.nextLine();
		
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st= con.prepareStatement(query);
		st.setString(1, airline);
		st.setString(2, airId);
		st.setString(3, flight);
		
		int  row=st.executeUpdate();
			System.out.println("Number of rows affected "+row);
		
		
		con.close();
	}
	
		public static void deleteAirline()throws SQLException
		{
			
			String url="jdbc:mysql://localhost:3306/airline";
			String user="root";
			String password="root";
			String query="delete from airline where airName=?";
			
			
			Connection con = DriverManager.getConnection(url,user,password);
			   PreparedStatement st = con.prepareStatement(query);

			    System.out.println("Enter airline name");
			    String airName = sc.nextLine();

			    st.setString(1, airName);
			    int row = st.executeUpdate(); // Execute the update using the prepared statement

			    System.out.println("Number of rows affected " + row);

			    con.close();
		}
		
		public static void updateAirline()throws SQLException
		{
			
			String url="jdbc:mysql://localhost:3306/airline";
			String user="root";
			String password="root";
			String query="update airline set airName=? where  airId=?";
			
			
			Connection con = DriverManager.getConnection(url,user,password);
			   PreparedStatement st = con.prepareStatement(query);

			    System.out.println("Enter airline name to update");
			    String airName = sc.nextLine();
			    
			    System.out.println("Enter airline Id");
			    String airId = sc.nextLine();

			    st.setString(1, airName);
			    st.setString(2, airId);
			    int row = st.executeUpdate(); // Execute the update using the prepared statement

			    System.out.println("Number of rows affected " + row);

			    con.close();
		}
		
		
		

}
