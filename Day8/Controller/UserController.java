package com.example.demo.Controller;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.UserService;
import com.example.demo.User.User;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

	
	@Autowired
	private UserService userS;
	
	@PostMapping("/user/userAdd")
	public void postUser(@RequestBody User user)
	{
		userS.addUser(user);
	}
	
	@GetMapping("/user/userGetAll")
	public ArrayList<User> getAllUser()
	{
		ArrayList<User> l= new ArrayList<>();
		l=userS.showUsers();
		return l;
	}
	
}
