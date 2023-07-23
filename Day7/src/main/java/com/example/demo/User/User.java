package com.example.demo.User;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="id")
	public int id;
	
	@Column(name="fname")
	public String fname;
	
	@Column(name="lname")
	public String lname;
	
	@Column(name="email")
	public String email;
	
	@Column(name="pass")
	public String pass;
	
	

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPass() {
		return pass;
	}

	public void setPass(String pass) {
		this.pass = pass;
	}

	//parameterized constructor
	public User(int id,String fname , String lname, String email, String pass)
	{
		this.id=id;
		this.fname=fname;
		this.lname=lname;
		this.email=email;
		this.pass=pass;
	}
	
	//default constructor
	public User()
	{
		
	}

}
