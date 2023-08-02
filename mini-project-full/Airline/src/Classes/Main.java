package Classes;
import java.sql.SQLException;
import java.util.Scanner;


//Object-Oriented Programming Concepts used:
// 1. Class
// 2. Object
// 3. Encapsulation
// 4. Abstraction (Not explicitly shown in the code, but the internal details of objects are abstracted through methods)
// 5. Inheritance (Ticket extends Flight)
// 6. Polymorphism ( constructor overloading)
// 7. Constructor (Constructors in Ticket, Passenger, and Flight classes)
// 8. Getter and Setter Methods (Used in Ticket, Passenger, and Flight classes to access and modify private member variables)
// 9. Composition (Objects of Passenger, Flight, and Ticket classes are composed in the Main class)

public class Main {
	
	
	
	public static void main(String args[]) throws SQLException
	{
		Scanner sc= new Scanner(System.in);
		
		System.out.println("WELCOME TO AIRLINE RESERVATION SITE\n"
							+ "ENTER YOUR NAME ");
		String name = sc.nextLine();
		
		System.out.println("ENTER YOUR ID");
		int id=sc.nextInt();
		
		sc.nextLine();
	
		System.out.println("ENTER YOUR LOCATION");
		String loc=sc.nextLine();
		

		Passenger pass= new Passenger();		 
		pass.insertPassenger(name, id, loc);
	
		
		System.out.println("ENTER YOUR BOOKING DETAILS");
		
		System.out.println("FLYING FROM  :");
		String from =sc.nextLine();
		
		System.out.println("FLYING TO  :");
		String to =sc.nextLine();
		
		System.out.println("SEATS : ");
		int req_seats=sc.nextInt();
		
		sc.nextLine();
		
		System.out.println("OUTBOUND  :");
		String depDate=sc.nextLine();
		
		System.out.println("RETURN  :");
		String arrivalDate=sc.nextLine();
		
		
		//method overloading - compile time polymorphism
		Flight flight= new Flight();
		Flight f1= new Flight(id,from , to , depDate , arrivalDate,req_seats,10000);
		flight.insertFlight(from , to , depDate,arrivalDate,req_seats);
		
		
	
		
		
		System.out.println("CHECKING FLIGHTS...\n\n");
		
		Ticket t= new Ticket ();
		t.insertTicket(name, id , loc, from , to ,depDate,arrivalDate,1000);
		t.readTicket(id);
		
		AirlineA a= new Flight();
		a.display();
		
		

		
		
		
		
		
		
		
		
		
		
		
	}

}
