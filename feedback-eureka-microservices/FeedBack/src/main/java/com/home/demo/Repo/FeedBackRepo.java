package com.home.demo.Repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.home.demo.Entity.FeedBack;

public interface FeedBackRepo extends JpaRepository<FeedBack,Integer>{

}
