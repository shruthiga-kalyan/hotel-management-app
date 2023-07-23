package com.example.demo.Service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.Repo.UserRepo;
import com.example.demo.User.User;



@Service
public class UserService {
	
	@Autowired
	private UserRepo userR;
	
	public void addUser(User user)
	{
		userR.save(user);
	}
	
	public ArrayList<User> showUsers()
	{
		return 	(ArrayList<User>) userR.findAll();
	}

}
