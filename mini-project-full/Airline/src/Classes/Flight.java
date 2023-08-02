package Classes;
import java.sql.*;
import java.util.*;

public class Flight  extends AirlineA
{
	
	private int flightId;
	private String from ;
	private String to;
	private int cost;
	private String depDate;
	private String arrivalDate;
	private int seat;
	
	
	//abstraction
	//encapsulation
	public int getFlightId() {
		return flightId;
	}
	public void setFlightId(int flightId) {
		this.flightId = flightId;
	}
	public String getFrom () {
		return from ;
	}
	public void setFrom (String from ) {
		this.from  = from ;
	}
	public String getTo() {
		return to;
	}
	public void setTo(String to) {
		this.to = to;
	}
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getDepDate() {
		return depDate;
	}
	public void setDepDate(String depDate) {
		this.depDate = depDate;
	}
	public String getArrivalDate() {
		return arrivalDate;
	}
	public void setArrivalDate(String arrivalDate) {
		this.arrivalDate = arrivalDate;
	}
	public int getSeat() {
		return seat;
	}
	public void setSeat(int seat) {
		this.seat = seat;
	}
	
	
	
//	polymorphism
	public Flight(int flightId, String to , String depDate,String arrivalDate , String from , int seat,int cost)
	{
		this.flightId=flightId;
		this.seat=seat;
		this.from =from ;
		this.to=to;
		this.arrivalDate=arrivalDate;
		this.depDate=depDate;
		this.cost=cost;
	}
	
	public Flight( String from,String to , String depDate , int seat)
	{
		
		this.from =from ;
		this.depDate=depDate;
		this.depDate=depDate;
		this.seat=seat;
		
	}
	
	public Flight()
	{
		flightId=0;
		seat=0;
		depDate="";
		arrivalDate="";
		from ="";
		to="";
		cost=0;
	}
	
	public Flight(String from ,String to, String arrivalDate,String depDate,int req_seats)
	{
		this.from=from;
		this.to=to;
		this.depDate=depDate;
		this.arrivalDate=arrivalDate;
		this.seat=req_seats;
		
	}
	
	
	@Override
	public void display()
	{
		System.out.println("Welcome to flight !");
	}
	
	public void checkFlight(int req_seats) throws SQLException
	{
		Flight flight = new Flight();
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="insert into flight values(?,?,?,?,?,?);";

		flight.checkFlight(req_seats);
		flight.setArrivalDate(arrivalDate);
		flight.setDepDate(depDate);
		flight.setFrom(from);
		flight.setTo(to);
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st= con.prepareStatement(query);
		st.setString(1, flight.getFrom());
		st.setString(2, flight.getTo());
		st.setString(3, flight.getDepDate());
		st.setString(4, flight.getArrivalDate());
		st.setInt(4, 100);
		
		
		int  row=st.executeUpdate();
		
		con.close();
            

	}
	
	public void readFlight() throws SQLException
	{
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="select * from flight";
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		Statement st=con.createStatement();		
		ResultSet rs=st.executeQuery(query);
		
		
		
		
		rs.next();
				System.out.println("FROM :"+rs.getString(1));
				System.out.println("TO : "+rs.getString(2));
				System.out.println("OUTBOUND  : "+rs.getString(3));
				System.out.println("RETURN  : "+rs.getString(4));
				System.out.println("COST  : "+rs.getInt(5));
				System.out.println("FLIGHT ID  : "+rs.getInt(6));
				System.out.println();		
		
		
		con.close();
		
	}
	

	public  void insertFlight(String src, String dest,String depDate,String arrivalDate,int seat)throws SQLException
	{
		String url="jdbc:mysql://localhost:3306/airline";
		String user="root";
		String password="root";
		String query="insert into flight(src,dest,depature,arrival,cost,seat) values(?,?,?,?,?,?);";
		
//		Scanner sc= new Scanner(System.in);
		
		
		
		
		
		
		Connection con = DriverManager.getConnection(url,user,password);
		PreparedStatement st= con.prepareStatement(query);
		st.setString(1, src);
		st.setString(2, dest);
		st.setString(3, depDate);
		st.setString(4,arrivalDate);
		st.setInt(5, 100);
		st.setInt(6, seat);		
		
		
		
		
		int  row=st.executeUpdate();
//			System.out.println("Number of rows affected flights "+row);
		
				
		con.close();
		
	}
	

}


